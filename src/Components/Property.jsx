/* eslint-disable no-unused-vars */
import React from 'react';
import propertybg from "../assets/property/propertybg.png";
import property1 from "../assets/property/property1.png";
import { FaBath, FaCalendar } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { TbMap2 } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const properties = [
    {
        id: 1,
        image: property1,
        location: "Spintex",
        baths: 2,
        beds: 4,
        type: "House",
        date: "2nd Jan, 2025",
        title: "4 bedroom house for sale",
        description: "Newly built, very spacious house. All rooms en suite with a very spacious living room and a kitchen with all the modern appliances.",
        features: [
            "Large outdoor space",
            "Close proximity to main roads and amenities",
            "Secure neighborhood",
            "Reliable and strong building materials"
        ]
    },

    {
        id: 2,
        image: property1,
        location: "Spintex",
        baths: 2,
        beds: 4,
        type: "House",
        date: "2nd Jan, 2025",
        title: "4 bedroom luxury house for sale",
        description: "Newly built, very spacious house. All rooms en suite with a very spacious living room and a kitchen with all the modern appliances.",
        features: [
            "Large outdoor space",
            "Close proximity to main roads and amenities",
            "Secure neighborhood",
            "Reliable and strong building materials"
        ]
    },
];

const Property = () => {
    const navigate = useNavigate();

    const handleReadMore = (propertyId) => {
        navigate(`/property/${propertyId}`); // Navigate to property details page
    };

    return (
        <div className='overflow-hidden'>
            <div className="relative">
                {/* Background Image Section */}
                <div className="relative overflow-hidden">
                    <img
                        src={propertybg}
                        alt="about"
                        className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
                </div>

                {/* Text Content Section */}
                <div className="absolute z-30 top-[50%] left-4 right-4 sm:left-8 sm:right-8 md:left-[10%] md:right-[10%] lg:left-[200px] transform -translate-y-1/2 flex flex-col gap-2">
                    <div className="w-[100px] h-[20px] bg-[#041C37] border-l-4 border-[#DE5334] flex items-center justify-center">
                        <h2 className="text-white text-[10px] sm:text-[12px]">properties</h2>
                    </div>
                    <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold">PROPERTIES</h1>
                </div>
            </div>

            <section>
                <div className="w-full h-auto px-4 sm:px-10 md:px-20 lg:px-[200px] py-10">
                    <div className="w-full h-auto flex flex-col">
                        <div className="w-full h-auto md:h-[100px] mb-4 flex flex-col items-center justify-center text-center">
                            <div className="w-[140px] h-[20px] bg-[#E8E8E8] border-l-4 border-[#DE5334] flex items-center justify-center">
                                <h2 className="text-black text-[10px] sm:text-[12px]">Feature Properties</h2>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-black">Our Latest and Greatest</h2>
                        </div>
                        <div>
                            {properties.map((property) => (
                                <div key={property.id} className="flex flex-col lg:flex-row border-t border-[#D6D6D6] gap-8 py-5 mb-10">
                                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
                                        <div className="relative group w-full lg:w-[453px] h-[250px] lg:h-[308px]">
                                            <img
                                                src={property.image}
                                                alt="property"
                                                className="w-full h-full object-cover"
                                                loading='lazy'
                                            />
                                            <div className="absolute lg:top-10 top-10 left-10 lg:left-10 w-[320px] h-[170px] lg:w-[365px] lg:h-[240px] bg-[#62C095] bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                                <button onClick={() => handleReadMore(property.id)} className="text-white text-lg font-medium hover:underline">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-[85px] h-auto sm:h-[308px] flex sm:flex-col items-center justify-between">
                                            <div className="flex flex-col items-center">
                                                <TbMap2 size={20} />
                                                <span className="text-[12px]">{property.location}</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <FaBath size={20} />
                                                <span className="text-[12px]">{property.baths}</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <IoIosBed size={20} />
                                                <span className="text-[12px]">{property.beds}</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <FaHouse size={20} />
                                                <span className="text-[12px]">{property.type}</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <FaCalendar size={20} />
                                                <span className="text-[12px]">{property.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-[520px] h-auto sm:h-[308px] gap-4 pl-4 sm:pl-14 flex flex-col items-start border-l border-[#D6D6D6]">
                                        <h1 className="text-[24px] sm:text-[30px]">{property.title}</h1>
                                        <p className="text-[16px] sm:text-[18px] text-[#666C89]">{property.description}</p>
                                        <ul className="list-disc pl-4 sm:pl-8 text-[16px] sm:text-[18px]">
                                            {property.features.map((feature, index) => (
                                                <li key={index} className="mb-2 sm:mb-3">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Property;
