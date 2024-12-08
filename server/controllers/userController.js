import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";



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
        message: 'Login Successful',
        token,
        user: { name: user.name },
      });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("ROUTE: /user/login - ", error);
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

    const existingEmail = await userModel.findOne({email})
    
    if(existingEmail){
        return res.json({success:false, message: 'User already register with this email'})
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
    console.log("ROUTE: /user/register - ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const userCredits = async (req, res) => {

    try {
        const { userId } = req.body;        

        const user = await userModel.findById(userId);

        res.json({ success: true, 
            credits: user.creditBalance,
            user: {user: user.name}
         });


    } catch (error) {
        console.log("ROUTE: /user/credits - ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const paymentRazorpay = async (req, res) => {
  try {
    const { userId, planId } = req.body;    

    const user = await userModel.findById(userId);

    if (!user || !planId) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let credits, plan, amount, date;

    switch (planId) {
      case 'Basic':
          plan = 'Basic'
          credits = 100
          amount = 10
          break;

      case 'Advanced':
          plan = 'Advanced'
          credits = 500
          amount = 50
          break;
      
      case 'Business':
          plan = 'Business'
          credits = 5000
          amount = 250
          break;
  
      default:
          return res.status(400).json({ success: false, message: "Invalid plan" });
    }

    date = new Date();

    const transactionData = {
      userId,
      planId,
      credits,
      amount,
      date,
    };

    const newTransaction = await transactionModel.create(transactionData)

    const options = {
      amount: amount * 100,
      currency : process.env.CURRENCY,
      receipt : newTransaction._id

    }

    await razorpayInstance.orders.create(options, (error, order) => {
        if(error){
            return res.json({success:false, message:error})
        }
        return res.json({success:true, order})
    });
    
    
  } catch (error) {
    console.log("ROUTE: /user/payment - ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// API controller function to verify the razorpay payment

export const verifyRazorpay = async (req, res) => {
  try {

      const { razorpay_order_id } = req.body

      const orderInfo =  await razorpayInstance.orders.fetch(razorpay_order_id)
      
      if(orderInfo.status === 'paid'){
          const transactionData = await transactionModel.findById(orderInfo.receipt)

          if(transactionData.payment){
              return res.json({success:false, message: 'Payment Failed'})
          }

          //Adding Credits in user data

          const userData = await userModel.findOne({userId: transactionData.userId})
          const creditBalance = userData.creditBalance + transactionData.credits
          await userModel.findByIdAndUpdate(userData._id, {creditBalance})

          // Making the payment true
          await transactionModel.findByIdAndUpdate(transactionData._id, {payments: true})

          return res.json({success:true, message: 'Payment Successful'})

      }
      
  } catch (error) {
      console.log(error.message);
      res.json({success:false, message:error.message}) 
  }

}