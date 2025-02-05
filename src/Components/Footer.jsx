/* eslint-disable no-unused-vars */
import React from 'react'
import footerlogo from "../assets/footer/footerlogo.png"
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col px-6 sm:px-[200px] py-16 bg-white'>
                <div className='flex flex-col sm:flex-row items-center justify-between mb-6'>
                    <div className='w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0'>
                        <img
                            src={footerlogo} alt='footer'
                            loading='lazy'
                            className='max-w-full h-auto object-cover' />
                    </div>
                    <aside className='flex flex-col text-center sm:text-right max-w-full sm:w-[500px]'>
                        <h1 className='mb-2 text-black font-bold text-[22px]'>Your Trusted Real Estate Partner</h1>
                        <p className='text-[16px] text-black font-normal'>
                            At Menunda, we’re dedicated to making your real estate journey seamless. Whether buying, selling, renting, or investing, our expert team is here to guide you every step of the way.
                        </p>
                    </aside>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-between text-center sm:text-left'>
                    <div className='mb-4 sm:mb-0'>
                        <span className='text-[12px]'>
                            © 2021 All Rights Reserved
                        </span>
                    </div>
                    <div className='flex gap-4'>
                        <a href='#' className='text-[#339966] text-[24px] hover:text-[#376B53]'><SlSocialFacebook /></a>
                        <a href='#' className='text-[#339966] text-[24px] hover:text-[#376B53]'><FaInstagram /></a>
                        <a href='#' className='text-[#339966] text-[24px] hover:text-[#376B53]'><FaXTwitter /></a>
                        <a href='#' className='text-[#339966] text-[24px] hover:text-[#376B53]'><FiLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
