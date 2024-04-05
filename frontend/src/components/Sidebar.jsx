import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import {FaHeart} from 'react-icons/fa';
import { MdEditDocument, MdOutlineExplore } from 'react-icons/md';
import { PiSignInBold } from 'react-icons/pi';
import Logout from "./Logout";

const Sidebar = () => {
  const authUser = true;
  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-auto border-r bg-glass"
    >
      <nav className="h-full flex flex-col gap-3">
        <Link to="/" className="flex justify-center">
          <img src="/github.svg" alt="Github Logo" className="h-8" />
        </Link>
        <Link
          to="/"
          className="flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800"
        >
          <IoHomeSharp size={23} />
        </Link>

        {authUser && (
          <Link
            to="/likes"
            className="flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <FaHeart size={22} />
          </Link>
        )}
        {authUser && (
          <Link
            to="/explore"
            className="flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <MdOutlineExplore size={25} />
          </Link>
        )}

        {!authUser && (
            <Link
            to="/login"
            className="flex justify-center focus:outline-none p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <PiSignInBold size={25} />
          </Link>
        )}
        {!authUser && (
            <Link
            to="/login"
            className="flex justify-center focus:outline-none p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <MdEditDocument size={25} />
          </Link>
        )}


        {authUser && (
            <div className="flex flex-col mt-auto gap-2">
            <Logout />
            </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
