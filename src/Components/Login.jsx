import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/laptop.jpg";

export default function Login() {
  const navigate = useNavigate();
  

  return (
    <div className="absolute flex h-screen w-screen items-center justify-center">
      <div className="w-screen h-screen hidden sm:block">
      <img className="w-full h-full object-cover" src={Logo} alt="" />
      </div>
      
      <form
        onSubmit={() => {
          navigate("/dashboard");
        }}
        className="absolute max-h-5/6 max-w-[620px] w-5/6 md:w-full bg-gray-900 p-8 px-8 rounded-lg"
      >
        <h2 className="text-4xl dark:text-white font-bold text-center">
          SIGN IN
        </h2>
        <div className="flex flex-col dark:text-white py-2">
          <label>User Name</label>
          <input
            className="rounded-lg  bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col  dark:text-white py-2">
          <label>Password</label>
          <input
            className="rounded-lg  bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="password"
          />
        </div>
        <div className="flex justify-between text-grey-400 py-2 ">
          <p className="flex  dark:text-white items-center gap-x-2 ">
            <input type="checkbox" />
            <span> Remember Me</span>
          </p>
          <p className=" dark:text-white">Forgot Password</p>
        </div>
        <button
          type="submit"
          className="w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}