import React from "react";
import { FaGithub, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";

const Signup = () => {
  
  return (
    <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full rounded-lg shadow bg-glass md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold text-center md:text-2xl">
            Create Account
          </h1>
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
						focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full 
						text-center justify-center"
            onClick={handleLoginWithGithub}
          >
            <FaGithub className="w-5 h-5" />
            Sign Up with Github
          </button>
          <p className=" text-gray-300">
            By signing up, you will unlock all the features of the app.
            <span>
              <FaUnlockAlt className="w-4 h-4 inline mx-2" />
            </span>
          </p>
          <p className="text-sm font-light text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
