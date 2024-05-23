"use client";

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contacts() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div className="h-[500px] bg-gradient-to-b from-[#079247] to-[#cecece] items-center flex flex-col justify-center overflow-hidden">
                <h6 className="text-black text-center font-bold text-lg md:text-2xl pb-4 md:pb-6" data-aos="fade-up">STAY CONNECTED WITH US</h6>
                <div className="flex justify-center gap-6 lg:w-[760px] mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <a href="https://www.instagram.com/chemweekits/" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-6 rounded-full shadow-lg">
                            <FaInstagram className="text-[#000000] text-4xl lg:text-5xl" />
                        </div>
                    </a>
                    <a href="https://www.tiktok.com/@chemistryweekits" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-6 rounded-full shadow-lg">
                            <FaTiktok className="text-[#000000] text-4xl lg:text-5xl" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
