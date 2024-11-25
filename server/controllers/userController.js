import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if the login details exists in DB

    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

      res.json({
        success: true,
        token,
        user: { name: user.name },
      });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("ROUTE: /user/login - ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing deatils" });
    }

    // Encrypt the password before sending it to database
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create an object to store data in DB
    const userData = {
      name,
      email,
      password: hashPassword,
    };

    //Save userData in DB
    const newUser = new userModel(userData);
    const user = await newUser.save(); // save newuser in DB

    //generate a token to send in response for signup and login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    res.json({
      success: true,
      token,
      user: { name: user.name },
    });
  } catch (error) {
    console.log("ROUTE: /user/register - ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
