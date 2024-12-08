import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext);

  const navigate = useNavigate();

  // Initialize Razorpay Payment
  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Buy Credits",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

        try {

          const { data } = await axios.post(
            `${backendUrl}/api/user/verify-payment`,
            { response },
            { headers: {token} } 
          );
          console.log("payment ",data.success);
          
          if(data.success){
            loadCreditsData()
            navigate('/')
            toast.success('Credit Added')
          }

        } catch (error) {

          console.log(error);
          navigate('/')
          toast.error(error.message)

        }
        
      },
      theme: {
        color: "#2E073F",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Trigger Payment via Razorpay
  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/user/payment`,
        { planId },
        { headers: {token} } 
      );
    
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error initiating payment. Please try again.");
    }
  };

  return (
    <motion.div
      className="text-center pt-14 mb-10 px-4 h-screen"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <button className="bg-[#2E073F] text-white border-2 border-white shadow-xl px-10 py-3 rounded-full mb-6">
        Our Plans
      </button>

      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
        Choose the plan that’s right for you
      </h1>

      {/* Plan Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-md border rounded-lg py-8 px-6 text-gray-700 gap-10 hover:scale-105 transition-all duration-500 w-full max-w-xs sm:max-w-sm"
          >
            {/* Plan Logo */}
            <img className="w-12 mx-auto" src={assets.logo_icon} alt="Plan Logo" />

            {/* Plan Details */}
            <p className="mt-6 text-xl font-semibold text-center">{item.id}</p>
            <p className="text-sm text-gray-500 text-center">{item.desc}</p>

            <p className="mt-6 text-center">
              <span className="font-medium text-3xl ">₹{item.price}</span>{" "}
              <span className="text-sm text-gray-500">/ {item.credits} credits</span>
            </p>

            {/* Purchase Button */}
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="bg-black text-white mt-8 w-full py-3 rounded-full hover:scale-105 transition-all duration-500"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
