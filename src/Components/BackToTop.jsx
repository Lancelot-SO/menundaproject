/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };


    return (
        <>
            {show && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="back-to-top"
                >
                    <IoIosArrowUp size={30} />
                </button>
            )}

        </>
    );
};

export default BackToTop;
