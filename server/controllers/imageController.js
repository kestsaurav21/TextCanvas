import userModel from "../models/userModel.js";
import FormData from 'form-data';

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;        

        // Fetch the user from the database
        const user = await userModel.findById(userId);


        // Check if user and prompt are provided
        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing Details' });
        }

        // Check if user has enough credit balance
        if (user.creditBalance <= 0) {
            return res.json({ success: false, message: 'No credit balance', creditBalance: user.creditBalance });
        }

        // Prepare the form data for the API request
        const form = new FormData();
        form.append('prompt', prompt);

        // Log the form data for debugging
        console.log('Form data:', form);

        // Send the request to the external image generation API using fetch
        const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': process.env.CLIPDROP_API, // Use your actual API key
            },
            body: form,
        });

        // Log the response status and body for debugging
        console.log('Response status:', response.status);
        const responseText = await response.text(); // To check the response content
        console.log('Response text:', responseText);

        // Check if the response is successful
        if (!response.ok) {
            return res.json({ success: false, message: 'Failed to generate image', responseText });
        }

        // Convert the response to an ArrayBuffer
        const buffer = await response.arrayBuffer();

        // Convert the ArrayBuffer to base64
        const base64Image = Buffer.from(buffer).toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Update the user's credit balance
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        // Respond with the generated image and updated credit balance
        res.json({ success: true, message: 'Image Generated', creditBalance: user.creditBalance - 1, resultImage });

    } catch (error) {
        console.log("ROUTE: /user/generateImage - ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
