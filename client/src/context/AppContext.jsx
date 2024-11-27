import { createContext, useEffect, useState } from "react";
import {toast} from "react-toastify";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AppContext = createContext();

const AppProvider = ({ children }) => {

  const navigate = useNavigate()

  const [user, setUser] = useState(null);

  const [showLogin, setShowLogin] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCreditData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setUser(null)
  }

  const generateImage = async (prompt) => {
    try {
      // Send the request to the backend API to generate the image
      const { data } = await axios.post(backendUrl + "/api/image/generateimage", 
        { prompt }, {
          headers: { token }
        }
      );
  
  
      // Check if the image generation was successful
      if (data.success) {
        // If successful, load credit data and return the result image
        await loadCreditData();  // Add await if it's async
        return data.resultImage || null;  // Check if resultImage exists
      } else {
        // If not successful, show error message and handle credit balance
        toast.error(data.message);
        await loadCreditData();  // Add await if it's async
        if (data.creditBalance <= 0) {
          navigate('/buy');
        }
      }
    } catch (error) {
      // Handle API request errors
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);  // Use specific error message from response
    }
  };
  

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditData,
    logout,
    generateImage
    };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
