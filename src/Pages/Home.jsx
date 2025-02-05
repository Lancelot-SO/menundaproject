/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import homeImg1 from '../assets/home/homeImg1.png';
import homelogo from '../assets/home/homelogo.png';
import Hero1 from "../assets/home/hero1.png"
import Hero2 from "../assets/home/hero2.png"
import Hero3 from "../assets/home/hero3.png"
import Hero4 from "../assets/home/hero4.png"


import grid1 from "../assets/home/grid1.png"
import grid2 from "../assets/home/grid2.png"
import grid3 from "../assets/home/grid3.png"
import grid4 from "../assets/home/grid4.png"
import grid5 from "../assets/home/grid5.png"
import grid6 from "../assets/home/grid6.png"
import grid7 from "../assets/home/grid7.png"
import grid8 from "../assets/home/grid8.png"
import grid9 from "../assets/home/grid9.png"
import grid10 from "../assets/home/grid10.png"

import pic1 from "../assets/home/pic1.png"
import pic2 from "../assets/home/pic2.png"
import pic3 from "../assets/home/pic3.png"
import pic4 from "../assets/home/pic4.png"
import pic5 from "../assets/home/pic5.png"
import FeaturedProject from '../Components/FeaturedProject';




const Home = () => {

    return (
        <div className='overflow-hidden'>
            <div className="relative flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-[200px] py-[20px] h-[100vh] bg-[#f4f8fa]">
                {/* Left Section */}
                <div className="flex flex-col items-start w-full lg:w-auto relative">
                    <img
                        src={homeImg1}
                        alt="Modern House"
                        className="object-cover w-full lg:w-[400px] rounded-[10px] shadow-lg"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 lg:hidden rounded-[10px]"></div>

                </div>



                {/* Right Section with background logo */}
                <div className="hidden absolute inset-0 lg:flex flex-col items-center lg:items-end">
                    <img
                        src={homelogo}
                        alt="Modern House"
                        className="object-cover w-[600px] lg:w-[800px]"
                        loading="lazy"
                    />
                </div>

                {/* Main Content (Title and Description) */}
                <div className='absolute top-[15%] lg:left-[60%] left-[50%] transform -translate-x-1/2 w-[90%] max-w-[400px] lg:h-[300px] flex flex-col justify-between text-center lg:text-left'>
                    <div className='w-full h-[185px]'>
                        <h1 className='text-[32px] sm:text-[40px] md:text-[42px] font-semibold lg:text-[#171A22] text-white text-left'>
                            Your Dream Property, <br /> Our Expertise.
                        </h1>
                    </div>
                    <div className='w-full h-[67px]'>
                        <p className='lg:text-[#171A22] text-white text-[14px] sm:text-[16px] font-normal leading-[20px] lg:leading-[23px] text-left'>
                            From finding your perfect home to managing every real estate need, we’re here to make property ownership simple and stress-free.
                        </p>
                    </div>
                </div>

                {/* Card Section large */}
                <div className="absolute lg:top-[63%] top-[470px] lg:left-[34%] left-[50px] lg:w-[850px] w-[310px] lg:h-[180px] h-[400px] flex lg:flex-row flex-col gap-5">
                    <div className='flex lg:gap-5 gap-2'>
                        <div className='flex flex-col lg:w-[190px] w-[150px] h-[180px] shadow-lg hover:scale-105 transform transition-transform duration-300'>
                            <img src={Hero1} alt='hero'
                                className='object-cover w-full h-[127px] rounded-t-[10px]'
                                loading='lazy' />
                            <span className='w-full h-[53px] bg-white flex items-center justify-center text-[#171A22] text-[14px] font-semibold rounded-b-[10px]'>
                                Buying & Selling
                            </span>
                        </div>
                        <div className='flex flex-col lg:w-[190px] w-[150px] h-[180px] shadow-lg hover:scale-105 transform transition-transform duration-300'>
                            <img src={Hero2} alt='hero'
                                className='object-cover w-full h-[127px] rounded-t-[10px]'
                                loading='lazy' />
                            <span className='w-full h-[53px] bg-white flex items-center justify-center text-[#171A22] text-[14px] font-semibold rounded-b-[10px]'>
                                Renting & Leasing
                            </span>
                        </div>
                    </div>
                    <div className='flex lg:gap-5 gap-2'>
                        <div className='flex flex-col lg:w-[190px] w-[150px] h-[180px] shadow-lg hover:scale-105 transform transition-transform duration-300'>
                            <img src={Hero3} alt='hero'
                                className='object-cover w-full h-[127px] rounded-t-[10px]'
                                loading='lazy' />
                            <span className='w-full h-[53px] bg-white flex items-center justify-center text-[#171A22] text-[14px] font-semibold rounded-b-[10px]'>
                                Property Valuation
                            </span>
                        </div>
                        <div className='flex flex-col lg:w-[190px] w-[150px] h-[180px] shadow-lg hover:scale-105 transform transition-transform duration-300'>
                            <img src={Hero4} alt='hero'
                                className='object-cover w-full h-[127px] rounded-t-[10px]'
                                loading='lazy' />
                            <span className='w-full h-[53px] bg-white flex items-center justify-center text-[#171A22] text-[14px] font-semibold rounded-b-[10px]'>
                                Land Development
                            </span>
                        </div>
                    </div>
                </div>


            </div>

            <section>
                <div className='flex flex-col lg:flex-row lg:h-[640px] h-[1200px] w-full'>
                    <div className='relative flex flex-1 lg:flex-row lg:justify-center'>
                        <img
                            src={grid1} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[150px] lg:left-[240px] top-[100px] left-[20px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid2} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[70px] lg:left-[360px] top-[50px] left-[140px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid3} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[70px] lg:left-[480px] top-[80px] left-[260px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid4} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[120px] lg:left-[600px] top-[230px] left-[260px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid5} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[220px] lg:left-[480px] top-[240px] left-[140px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid6} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[255px] lg:left-[360px] top-[270px] left-[20px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid7} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[340px] lg:left-[600px] top-[400px] left-[140px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid8} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[370px] lg:left-[480px] top-[460px] left-[20px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid9} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[440px] lg:left-[360px] top-[550px] left-[140px] hover:scale-110 transition-transform duration-300'
                        />
                        <img
                            src={grid10} alt='grid'
                            loading='lazy'
                            className='absolute lg:top-[320px] lg:left-[200px] top-[460px] left-[250px] hover:scale-110 transition-transform duration-300'
                        />
                    </div>

                    <div className="flex flex-1 items-center justify-center">
                        <div className='flex-col items-center lg:items-start justify-center px-8 py-12 w-full lg:w-[580px] lg:pr-[100px]'>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <p className="text-gray-700 text-base leading-7 text-left">
                                At Menunda, we are your all-in-one real estate solution. From buying and selling properties to renting and land acquisition, we provide comprehensive services tailored to your needs. With a passion for excellence and a commitment to client satisfaction, we make navigating the real estate market seamless and rewarding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col h-auto lg:h-[700px] gap-4 bg-white">
                {/* Left Side - Image */}
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="flex flex-1">
                        <img
                            src={pic1}
                            alt="Construction Worker"
                            className="w-full h-[300px] md:h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="flex flex-1 bg-[#376B53] text-white py-8 px-6 lg:px-20 flex-col justify-center">
                        <div className="w-full md:w-[580px]">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
                            <p className="text-base md:text-lg leading-relaxed">
                                At Menunda, we handle every aspect of real estate. From property sales
                                and rentals to land acquisition and development, we provide reliable
                                services designed to meet your needs. Whether you're a buyer, seller,
                                or investor, we make real estate simple and stress-free.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid Images */}
                <div className="grid grid-cols-2 md:grid-cols-4 px-4 lg:px-0 gap-4 w-full h-auto">
                    <img
                        src={pic2}
                        alt="Aerial view"
                        loading="lazy"
                        className="w-full h-[150px] md:h-[210px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={pic3}
                        alt="Business Meeting"
                        loading="lazy"
                        className="w-full h-[150px] md:h-[210px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={pic4}
                        alt="Analytics"
                        loading="lazy"
                        className="w-full h-[150px] md:h-[210px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={pic5}
                        alt="Investment Blocks"
                        loading="lazy"
                        className="w-full h-[150px] md:h-[210px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>

            <section>
                <div className="relative w-full lg:h-[700px] bg-[#3CAFB4] bg-opacity-[6%]">
                    <img
                        src={homelogo}
                        alt="Modern House"
                        className="absolute top-[15%] left-[-100px] opacity-50 object-cover w-[700px] h-[550px]"
                        loading="lazy"
                    />

                    {/* Services text content */}
                    <div className="relative z-10 lg:max-w-[900px] w-full mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-12 text-[#222]">
                            Our Services
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
                            {/* Column 1 */}
                            <div className='lg:w-[250px]'>
                                <h3 className="text-xl font-semibold mb-4 text-[#222]">
                                    Property Sales
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed">
                                    We specialize in making property sales effortless for both buyers
                                    and sellers. Whether you're selling your property or looking for
                                    your dream home or commercial space, our team offers expert market
                                    analysis, effective marketing strategies, and professional
                                    negotiation to ensure a smooth and profitable transaction. With
                                    Menunda, you can trust that your property sale is in good hands.
                                </p>
                            </div>

                            {/* Column 2 */}
                            <div className='lg:w-[250px]'>
                                <h3 className="text-xl font-semibold mb-4 text-[#222]">
                                    Property Rentals
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed">
                                    Finding the right rental property can be overwhelming, but we're
                                    here to make it simple. Our team works closely with clients to
                                    understand their needs and match them with ideal rental options.
                                    From residential homes to office spaces, we provide personalized
                                    support, helping you navigate leases, inspections, and everything in
                                    between for a hassle-free rental experience.
                                </p>
                            </div>

                            {/* Column 3 */}
                            <div className='lg:w-[250px]'>
                                <h3 className="text-xl font-semibold mb-4 text-[#222]">
                                    Home & Office Interior Decoration
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed">
                                    Transform your spaces into stunning works of art with Menunda's
                                    interior decoration services. We specialize in crafting unique
                                    designs for homes and offices that combine functionality with
                                    elegance. From selecting the perfect color palettes and furniture to
                                    adding stylish decor, our expert team works closely with you to
                                    create spaces that inspire and leave a lasting impression.
                                </p>
                            </div>

                            {/* Column 4 */}
                            <div className='lg:w-[250px]'>
                                <h3 className="text-xl font-semibold mb-4 text-[#222]">
                                    Building Construction & Material Sales
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed">
                                    At Menunda, we bring your dream projects to life with top-tier
                                    building construction services. From initial planning to the final
                                    build, we handle every detail with precision and expertise, ensuring
                                    your vision is realized. Additionally, we provide a wide range of
                                    high-quality construction materials to support your projects.
                                    Whether you're a contractor or a homeowner, you can trust Menunda
                                    for reliable products and exceptional service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <FeaturedProject />
                </div>
            </section>





        </div>


    );
};

export default Home;
