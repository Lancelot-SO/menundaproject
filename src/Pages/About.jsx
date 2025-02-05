/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import aboutbg from "../assets/about/aboutbg.png"
import about1 from "../assets/about/about1.png"
import about2 from "../assets/about/about2.png"
import about3 from "../assets/about/about3.png"
import footerlogo from "../assets/footer/footerlogo.png"



const About = () => {

    const [activeTitle, setActiveTitle] = useState("All-in-One Services");

    // Content for each title
    const dynamicContent = {
        "All-in-One Services":
            "We provide a complete range of real estate solutions, making it easy for you to achieve your property goals. Whether you’re buying, selling, renting, or acquiring land, our experienced team ensures every step of the process is seamless, efficient, and stress-free.",
        "Client-Focused":
            "At Menunda, we put your needs first. By understanding your unique preferences and goals, we craft personalized solutions designed to meet and exceed your expectations. Your satisfaction is our top priority, and we work hard to make your real estate journey smooth and rewarding.",
        "Transparent Deals":
            "Trust and integrity are at the core of Menunda’s values. We believe in open communication and complete transparency, ensuring that every detail of your transaction is handled with honesty and professionalism, giving you confidence at every step.",
        "Excellence Guaranteed":
            "Our commitment to excellence means we go above and beyond to deliver outstanding results. From the first consultation to the final handshake, we strive to exceed expectations, ensuring every client has a superior real estate experience with us.",
    };
    return (
        <div className='overflow-hidden'>
            <div className="relative">
                {/* Background Image Section */}
                <div className="relative overflow-hidden">
                    <div className="relative">
                        <img
                            src={aboutbg}
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
                            About Us
                        </h2>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold">
                        ABOUT MENUNDA
                    </h1>
                </div>
            </div>


            <section className="flex flex-col lg:flex-row items-center lg:justify-between mx-auto w-full lg:w-[1120px] h-auto lg:h-[700px] py-10 lg:py-0 px-6 lg:px-0 gap-8">
                {/* Left Section: Images */}
                <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[50%] h-auto">
                    <div className="flex">
                        <img
                            src={about1}
                            alt="Smiling professionals"
                            loading='lazy'
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Section: Text and Buttons */}
                <div className="flex flex-col gap-6 w-full lg:w-[50%] mt-6 lg:mt-0">
                    {/* Heading Section */}
                    <div className="flex flex-col gap-2">
                        <div className="w-[60px] h-[20px] bg-[#E8E8E8] border-l-4 border-[#1C1F35] flex items-center justify-center">
                            <h2 className="text-black text-[10px] sm:text-[12px]">About Us</h2>
                        </div>
                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">
                            What makes us stand out
                        </h1>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-wrap gap-2">
                        {Object.keys(dynamicContent).map((title) => (
                            <button
                                key={title}
                                onClick={() => setActiveTitle(title)}
                                className={`px-4 py-2 ${activeTitle === title
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-200 text-gray-700"
                                    } text-sm`}
                            >
                                {title}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Content Section */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                        {dynamicContent[activeTitle]}
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <div className="bg-[#F1F5F9] w-full h-auto flex flex-col lg:flex-row px-6 lg:px-[200px] py-10 gap-6 lg:gap-0">
                        {/* Left Section: Vision Text */}
                        <div className="w-full lg:w-[700px] h-auto lg:h-full flex flex-col items-start justify-center text-left lg:mt-32 mt-0">
                            <h2 className="text-[28px] lg:text-[40px] text-[#0F172A] font-semibold">
                                Our Vision
                            </h2>
                            <p className="text-[16px] lg:text-[20px] text-[#0F172A] mt-2">
                                To establish new standards of excellence in real estate service delivery across the country
                            </p>
                        </div>

                        {/* Right Section: Image */}
                        <div className="w-full h-[300px] lg:w-[700px] lg:h-full">
                            <img
                                src={about2}
                                alt="about"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div>
                    <div className="bg-[#F1F5F9] w-full h-auto flex flex-col-reverse lg:flex-row px-6 lg:px-[200px] py-10 gap-6">
                        {/* Left Section: Image */}
                        <div className="w-full h-[300px] lg:w-[700px] lg:h-full">
                            <img
                                src={about3}
                                alt="about"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Right Section: Mission Text */}
                        <div className="w-full lg:w-[700px] h-auto lg:h-full flex flex-col items-start justify-center text-left lg:mt-32 mt-0">
                            <h2 className="text-[28px] lg:text-[40px] text-[#0F172A] font-semibold">
                                Our Mission
                            </h2>
                            <p className="text-[16px] lg:text-[20px] text-[#0F172A] mt-2">
                                Menunda Real Estate is dedicated to delivering top-tier services across all aspects of building and residential real estate
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] py-10">
                <div className="mx-4 lg:mx-[200px]">
                    {/* Title */}
                    <h2 className="text-[24px] lg:text-[32px] font-semibold text-[#0F172A] mb-8 text-center lg:text-left">
                        Our Personality
                    </h2>

                    {/* Content Container */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        {/* Green Box */}
                        <div className="flex-shrink-0 italic bg-[#2E614E] text-white text-[24px] lg:text-[32px] lg:mt-28 mt-6 font-semibold flex items-center justify-start w-full lg:w-[550px] h-[120px] pl-6 mb-6 lg:mb-0">
                            Visionary
                        </div>

                        {/* Text Box */}
                        <div className="relative bg-[#1E3A8A] text-white p-6 lg:p-10 h-[320px] items-center justify-center shadow-lg w-full lg:w-[550px]">
                            <img
                                src={footerlogo}
                                alt="Description of image"
                                className="absolute top-[1%] lg:left-[15%] lg:w-[400px] w-[320px] h-full object-cover opacity-50"
                            />
                            <p className="relative text-[12px]  lg:mt-24 mt-20 leading-relaxed z-10">
                                Menunda is a forward-thinking real estate partner, combining deep market expertise with innovative solutions to guide clients through every aspect of property buying, selling, renting, and investing. We strive to turn aspirations into reality while building lasting relationships based on trust and excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default About