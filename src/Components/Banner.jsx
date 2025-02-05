/* eslint-disable no-unused-vars */
import React from 'react'
import banner from "../assets/home/banner.png"


const Banner = () => {
    return (
        <div className='overflow-hidden'>
            <section>
                <div className="relative w-full h-[500px]">
                    <img
                        src={banner}
                        alt="last"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />

                    {/* Content */}
                    <div className="absolute lg:top-[200px] top-[300px] lg:left-[200px] px-4 lg:px-0 flex">
                        <div className="">
                            <h2 className="lg:text-[32px] text-[24px] font-bold text-[#1E3161] w-[407px]">
                                Need a quick chat with a real estate agent?
                            </h2>
                            <p className="text-gray-600 text-sm mt-2 w-[300px] lg:w-full">
                                Agents typically get call back within 10 minutes. Please be patient.
                            </p>
                            <div className="mt-4">
                                <form className='flex'>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="border border-gray-300 rounded-md px-3 py-2 lg:w-full w-[250px]"
                                    />
                                    <div className="bg-[#376B53] hover:bg-[#4C9574] lg:w-[200px] w-[120px] mr-2 px-4 py-2 rounded-md ml-2">
                                        <button type='submit' className='lg:text-[14px] text-[10px] text-white'>
                                            Get a call back
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner