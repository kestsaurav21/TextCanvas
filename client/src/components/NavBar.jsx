import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(true);
  return (
    <div className="py-6 flex justify-between ">
      <div
        onClick={() => navigate("/")}
        className="w-24 sm:w-32 lg:w-40 flex items-center gap-2 cursor-pointer">
        <img src={assets.logo_icon} alt="logo" />
        <span className="text-md font-semibold sm:text-md lg:text-xl italic">
          TextCanvas
        </span>
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-4 cursor-pointer">
            <button onClick={() => navigate('/buy')}
            className="flex items-center gap-2 bg-purple-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img className="w-5" src={assets.credit_star} />
              <p className="text-sm sm:text-xs font-md text-gray-700">Credit: 4</p>
            </button>
            <p className="max-sm:hidden text-gray-700 pl-4">Hi! Saurav</p>
            <div className="relative group">
              <img className="w-10 drop-shadow" src={assets.profile_icon} alt="profile-icon" />
              <div className="absolute hidden group-hover:block top-0 right-0 text-black rounded pt-12">
                <ul className="list-none m-0  bg-white rounded-full text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>

            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button className="bg-[#2E073F] text-white font-bold px-7 py-2 sm:px-10 text-sm border-2 border-white rounded-full  hover:scale-105 transition-all duration-700 ">
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
