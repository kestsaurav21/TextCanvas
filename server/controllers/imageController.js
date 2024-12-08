import userModel from "../models/userModel.js";
import FormData from "form-data";
import fetch from "node-fetch";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        // Validate input
        if (!userId || !prompt) {
            return res.status(400).json({ success: false, message: "Missing Details" });
        }

        // Fetch the user from the database
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check if the user has enough credit balance
        if (user.creditBalance <= 0) {
            return res.status(403).json({
                success: false,
                message: "No credit balance",
                creditBalance: user.creditBalance,
            });
        }

        // Prepare form data
        const form = new FormData();
        form.append("prompt", prompt);

        // Make the API call
        const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
            method: "POST",
            headers: {
                "x-api-key": process.env.CLIPDROP_API,
                ...form.getHeaders(), // Ensure the correct headers are sent
            },
            body: form,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to generate image:", errorText);
            return res.status(response.status).json({
                success: false,
                message: "Failed to generate image",
                error: errorText,
            });
        }

        // Process response and convert to base64
        const buffer = Buffer.from(await response.arrayBuffer());
        const base64Image = buffer.toString("base64");
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Update the user's credit balance atomically
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $inc: { creditBalance: -1 } },
            { new: true }
        );

        // Respond with the generated image and updated credit balance
        res.json({
            success: true,
            message: "Image Generated",
            creditBalance: updatedUser.creditBalance,
            resultImage,
        });
    } catch (error) {
        console.error("ROUTE: /user/generateImage - ", error.message);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};
