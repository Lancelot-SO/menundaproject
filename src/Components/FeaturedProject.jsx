/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Feature1 from "../assets/home/feature1.png"
import Feature2 from "../assets/home/feature2.png"
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";



const FeaturedProject = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // For tablets and smaller screens
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640, // For mobile screens
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    const properties = [
        {
            id: 1,
            image: Feature1,
            name: "Jane Doe",
            distance: "6 miles",
        },
        {
            id: 2,
            image: Feature2,
            name: "Jane Doe",
            distance: "6 miles",
        },
        {
            id: 3,
            image: Feature1,
            name: "Jane Doe",
            distance: "6 miles",
        },
        {
            id: 4,
            image: Feature2,
            name: "Jane Doe",
            distance: "6 miles",
        },
        {
            id: 5,
            image: Feature1,
            name: "Jane Doe",
            distance: "6 miles",
        },
        // Add more properties as needed
    ];

    return (
        <div className="bg-gray-100 py-10 lg:px-[200px] px-4 h-[550px]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Property</h2>
                <Slider {...settings}>
                    {properties.map((property) => (
                        <div key={property.id} className="px-2">
                            <div className="relative w-[241px] h-[340px] rounded-lg shadow-lg overflow-hidden">
                                <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{property.name}</h3>
                                    <div className='flex items-center gap-2 text-white'>
                                        <SlLocationPin />
                                        <p className="">{property.distance}</p>
                                    </div>
                                </div>
                                <div className='absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#78EBB6] flex items-center justify-center'>
                                    <IoIosArrowForward />
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FeaturedProject;