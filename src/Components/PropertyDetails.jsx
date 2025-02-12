/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Global.css";
import detailsbg from "../assets/property/detailsbg.png";
import { FaBath, FaBed, FaCalendar, FaCheck, FaHome, FaRulerCombined } from 'react-icons/fa';
import propertyDetailsData from '../Data';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {

    const features = [
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
        "Air Conditioning",
    ];
    const { id } = useParams(); // Get ID from URL
    const selectedProperty = propertyDetailsData.find(p => p.id === parseInt(id, 10)); // Find property



    const [mainImage, setMainImage] = useState(selectedProperty.mainImage);
    const [activeThumbnail, setActiveThumbnail] = useState(null);

    const handleThumbnailClick = (thumbnail, index) => {
        setMainImage(thumbnail);
        setActiveThumbnail(index);
    };

    if (!selectedProperty) {
        return <p>Property not found</p>;
    }

    return (
        <div className='overflow-hidden'>
            {/* Background Section */}
            <div className="relative">
                <img
                    src={detailsbg}
                    alt="Background"
                    className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

                {/* Text Content */}
                <div className="absolute z-30 top-[50%] left-4 right-4 sm:left-8 sm:right-8 md:left-[10%] lg:left-[200px] transform -translate-y-1/2 flex flex-col gap-2">
                    <div className="w-[140px] h-[20px] bg-[#041C37] border-l-4 border-[#DE5334] flex items-center justify-center">
                        <a href='/property' className="text-white text-[10px] sm:text-[12px]">Back To Property</a>
                    </div>
                    <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold">
                        {selectedProperty.title}
                    </h1>
                </div>
            </div>

            {/* Property Details Section */}
            <section className="w-full h-auto px-4 md:px-20 lg:px-[200px] py-10">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[598px] h-auto flex flex-col items-center border-b border-[#D6D6D6] mb-4 text-center">
                        <div className="w-[140px] h-[20px] bg-[#E8E8E8] border-l-4 border-[#DE5334] flex items-center justify-center">
                            <h2 className="text-black text-[10px] sm:text-[12px]">Property Details</h2>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-black">
                            {selectedProperty.title}
                        </h2>
                    </div>

                    {/* Main Image & Thumbnails */}
                    <div className="flex flex-col lg:flex-row gap-16 w-full h-auto">
                        <div className="w-full lg:w-2/3 h-auto p-4">
                            <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
                                <img src={mainImage} alt="Property" className="w-full h-full object-cover" />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex justify-center gap-4 mt-4 mb-10">
                                {selectedProperty.thumbnails.map((thumbnail, index) => (
                                    <div
                                        key={index}
                                        className={`w-[100px] h-[80px] rounded-lg overflow-hidden border cursor-pointer hover:scale-105 transition-transform ${activeThumbnail === index ? "border-green-500" : "border-gray-300"}`}
                                        onClick={() => handleThumbnailClick(thumbnail, index)}
                                    >
                                        <img src={thumbnail} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>

                            {/* Property Info */}
                            <div className="w-full max-w-[800px] mx-auto bg-[#002d6d] rounded-lg text-white flex flex-col mb-4">
                                <div className="text-left px-4 py-2 text-base font-semibold border-b border-white">
                                    Details
                                </div>

                                <div className="grid grid-cols-5 divide-x divide-white text-center">
                                    <div className="py-2 flex lg:flex-row flex-col items-center justify-center gap-4">
                                        <FaBed className="text-xl" />
                                        <span className="mt-0.5 text-[14px] font-bold">{selectedProperty.bedrooms}</span>
                                    </div>
                                    <div className="py-2 flex lg:flex-row flex-col items-center justify-center gap-4">
                                        <FaBath className="text-xl" />
                                        <span className="mt-0.5 text-[14px] font-bold">{selectedProperty.bathrooms}</span>
                                    </div>
                                    <div className="py-2 flex lg:flex-row flex-col items-center justify-center gap-4">
                                        <FaRulerCombined className="text-xl" />
                                        <span className="mt-0.5 text-[14px] font-bold">{selectedProperty.size}</span>
                                    </div>
                                    <div className="py-2 flex lg:flex-row flex-col items-center justify-center gap-4">
                                        <FaHome className="text-xl" />
                                        <span className="mt-0.5 text-[14px] font-bold">{selectedProperty.propertyType}</span>
                                    </div>
                                    <div className="py-2 flex lg:flex-row flex-col items-center justify-center gap-4">
                                        <FaCalendar className="text-xl" />
                                        <span className="mt-0.5 text-[14px] font-bold">{selectedProperty.yearBuilt}</span>
                                    </div>
                                </div>
                            </div>

                            {/* description Info */}
                            <div className="bg-[#002d6d] text-white rounded-2xl p-6 space-y-4 max-w-3xl mx-auto shadow-lg mb-4">
                                <h2 className="text-xl font-semibold">Description</h2>
                                <hr className="border-t border-white" />
                                <p className="text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, class venenatis sodales vehicula eget est. Tristique
                                    litora vehicula pellentesque nulla taciti enim dictum nascetur felis, condimentum cursus est velit rutrum
                                    lobortis primis phasellus mi tempus, euismod habitasse non libero nunc habitant ridiculus consequat. Consequat
                                    parturient nibh platea condimentum habitant himenaeos imperdiet ultricies, mus nisi nostra bibendum nascetur
                                    semper habitasse, tempus velit gravida aptent per class congue.
                                </p>
                                <p className="text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, class venenatis sodales vehicula eget est. Tristique
                                    litora vehicula pellentesque nulla taciti enim dictum nascetur felis, condimentum cursus est velit rutrum
                                    lobortis primis phasellus mi tempus, euismod habitasse non libero nunc habitant ridiculus consequat. Consequat
                                    parturient nibh platea condimentum habitant himenaeos imperdiet ultricies, mus nisi nostra bibendum nascetur
                                    semper habitasse, tempus velit gravida aptent per class congue.
                                </p>
                            </div>
                            <div className="bg-[#002d6d] text-white rounded-2xl p-6 max-w-4xl mx-auto shadow-lg">
                                <h2 className="text-xl font-semibold">Features</h2>
                                <hr className="border-t border-white my-4" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <FaCheck size={4} className="text-[#002d6d] flex items-center justify-center p-1 w-4 h-4 rounded-full bg-[#4C9574]" />
                                            <span className="text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Inquiry Form */}
                        <div className="w-full lg:w-[336px] h-[450px] bg-white border border-white rounded-[10px] p-4 box_shadow">
                            <form className="flex flex-col gap-4">
                                <input type="text" placeholder="Name" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                <input type="text" placeholder="Phone" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                <input type="email" placeholder="Email" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                <textarea placeholder="Hello, I am interested in..." className="w-full p-3 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300" rows="4"></textarea>
                                <button type="submit" className="w-full py-3 bg-[#032D5F] text-white rounded-lg hover:bg-[#011c3a] transition-colors">
                                    Get a call back
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PropertyDetails;
