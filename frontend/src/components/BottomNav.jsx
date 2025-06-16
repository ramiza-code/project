import React from "react";
import { NavLink } from "react-router-dom";
import { FaComments, FaPlusCircle, FaUniversity, FaBlog } from "react-icons/fa";

const BottomNav = () => {
    return (
        <nav className="fixed bottom-0 w-full bg-white border-t shadow-lg flex justify-around py-3">
            <NavLink to="/chat" className="flex flex-col items-center text-gray-500 hover:text-green-500">
                <FaComments size={24} />
                <span className="text-xs">Chat</span>
            </NavLink>
            <NavLink to="/post" className="flex flex-col items-center text-gray-500 hover:text-green-500">
                <FaPlusCircle size={24} />
                <span className="text-xs">Post</span>
            </NavLink>
            <NavLink to="/university" className="flex flex-col items-center text-gray-500 hover:text-green-500">
                <FaUniversity size={24} />
                <span className="text-xs">University</span>
            </NavLink>

            <NavLink to="/blog" className="flex flex-col items-center text-gray-500 hover:text-green-500">
                <FaBlog size={24} />
                <span className="text-xs">Blog</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
