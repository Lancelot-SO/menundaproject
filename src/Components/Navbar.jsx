/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    const activeClassName = "text-[#1F4D85] relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#1F4D85] after:bottom-[-5px] after:left-0";

    return (
        <div className="overflow-hidden">
            <nav className="flex w-full h-[80px] z-50 bg-white bg-opacity-70 
            items-center justify-between lg:px-[200px] px-4 border-b-4 shadow-lg">
                {/* Logo */}
                <NavLink to="/">
                    <img src={logo} alt="logo" className="h-[50px]" />
                </NavLink>

                {/* Desktop Links */}
                <ul className="hidden lg:flex w-[350px] items-center justify-between">
                    <li className="text-[16px] relative">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeClassName : "text-[#0F172A]"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="text-[16px] relative">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? activeClassName : "text-[#0F172A]"
                            }
                        >
                            About us
                        </NavLink>
                    </li>
                    <li className="text-[16px] relative">
                        <NavLink
                            to="/property"
                            className={({ isActive }) =>
                                isActive ? activeClassName : "text-[#0F172A]"
                            }
                        >
                            Properties
                        </NavLink>
                    </li>
                    <li className="text-[16px] relative">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? activeClassName : "text-[#0F172A]"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger Menu Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-[#0F172A]">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-[80%] bg-white z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 shadow-lg`}
                >
                    <ul className="flex flex-col items-center justify-center h-full space-y-8">
                        <li className="text-[18px] relative">
                            <NavLink
                                to="/"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : "text-[#0F172A]"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-[18px] relative">
                            <NavLink
                                to="/about"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : "text-[#0F172A]"
                                }
                            >
                                About us
                            </NavLink>
                        </li>
                        <li className="text-[18px] relative">
                            <NavLink
                                to="/property"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : "text-[#0F172A]"
                                }
                            >
                                Properties
                            </NavLink>
                        </li>
                        <li className="text-[18px] relative">
                            <NavLink
                                to="/contact"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : "text-[#0F172A]"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
