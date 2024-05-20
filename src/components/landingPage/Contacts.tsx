import React from "react";

import { FaInstagram, FaTiktok } from "react-icons/fa"

export default function Contacts() {
    return (
        <>
            <div className="h-[500px] bg-gradient-to-b from-[#079247] to-[#cecece] items-center flex flex-col justify-center overflow-hidden">
                <h6 className="text-center font-bold text-lg md:text-2xl pb-4 md:pb-6">STAY CONNECTED WITH US</h6>
                <div className="flex justify-center gap-6 lg:w-[760px] mx-auto">
                    <div className="bg-white p-6 rounded-full">
                        <FaInstagram className="scale-[1.75]"/>
                    </div>
                    <div className="bg-white p-6 rounded-full">
                        <FaTiktok className="scale-[1.75]"/>
                    </div>
                </div>
            </div>
        </>
    )
}