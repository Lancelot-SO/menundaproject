/* eslint-disable no-unused-vars */
import React from 'react'
import contactbg from "../assets/contactbg.png"
import { FaClock, FaMailchimp } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";




const Contact = () => {
    return (
        <div>
            <div className="relative">
                {/* Background Image Section */}
                <div className="relative overflow-hidden">
                    <div className="relative">
                        <img
                            src={contactbg}
                            alt="about"
                            className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="absolute z-30 top-[50%] left-4 right-4 sm:left-8 sm:right-8 md:left-[10%] md:right-[10%] lg:left-[200px] transform -translate-y-1/2 flex flex-col gap-2">
                    {/* Small Tag */}
                    <div className="w-[60px] h-[20px] bg-[#041C37] border-l-4 border-[#DE5334] flex items-center justify-center">
                        <h2 className="text-white text-[10px] sm:text-[12px]">
                            Contact Us
                        </h2>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold">
                        CONTACT MENUNDA
                    </h1>
                </div>
            </div>

            <section className="py-20 px-4">
                <div className="mx-auto max-w-6xl bg-[#0A2B50] py-10 px-6 sm:px-10 lg:px-20 rounded-lg">
                    <div className="max-w-4xl flex flex-col mx-auto items-center text-center">
                        {/* Small Banner */}
                        <div className="w-[100px] h-[20px] bg-[#041C37] border-l-4 border-[#DE5334] flex items-center justify-center">
                            <h2 className="text-white text-[10px] sm:text-[12px]">Contact Us</h2>
                        </div>

                        <h2 className="text-3xl font-semibold mt-4 text-white">Get in touch with us</h2>
                        <p className="mt-2 text-white">Begin your real estate journey with us</p>

                        {/* Contact Details */}
                        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-8">
                            <div className="text-center">
                                <div className="bg-[#4C9574] p-3 rounded-full inline-block text-white">
                                    <FaMailchimp size={24} />
                                </div>
                                <p className="mt-2 text-white text-sm">client@menunda.com</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-[#4C9574] p-3 rounded-full inline-block text-white">
                                    <TbDeviceLandlinePhone size={24} />
                                </div>
                                <p className="mt-2 text-white text-sm">+233 50 811 4744</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-[#4C9574] p-3 rounded-full inline-block text-white">
                                    <FaClock size={24} />
                                </div>
                                <p className="mt-2 text-white text-sm">
                                    Mon - Sat 9.00 - 18.00 <br /> (Sunday Closed)
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="mt-8 space-y-4 w-full max-w-2xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your name*"
                                    className="p-3 border border-gray-500 rounded-md bg-transparent text-white w-full focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="p-3 border border-gray-500 rounded-md bg-transparent text-white w-full focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number*"
                                    className="p-3 border border-gray-500 rounded-md bg-transparent text-white w-full focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="City*"
                                    className="p-3 border border-gray-500 rounded-md bg-transparent text-white w-full focus:outline-none"
                                />
                            </div>
                            <textarea
                                placeholder="Your Message"
                                className="p-3 resize-none border border-gray-500 rounded-md bg-transparent text-white w-full h-32 focus:outline-none"
                            ></textarea>
                            <button className="bg-[#4C9574] text-white py-3 px-6 w-full sm:w-auto mx-auto rounded-md hover:bg-[#3b7a5e] transition">
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact