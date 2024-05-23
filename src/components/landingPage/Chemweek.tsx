"use client";

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center z-10 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="relative mb-5 mt-5 flex flex-col items-center justify-center" data-aos="fade-up">
          <img src="/center-star.png" alt="Top Star" className="absolute w-64 sm:w-80 md:w-96 lg:w-112"/>
          <img src="/logo.png" alt="Chemistry Week Logo" className="relative w-24 sm:w-36 md:w-48 lg:w-60"/>
        </div>
        <div className="relative inline-block mb-4" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute inset-0 bg-yellow-200 rounded-full shadow-lg h-full w-full"></div>
          <div className="relative px-4 py-1">
            <span className="text-white font-bold font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl"> Chemistry Week </span>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white" data-aos="fade-up" data-aos-delay="400"> Get To Know Chemistry Week 16 </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-400 mt-2" data-aos="fade-up" data-aos-delay="600"> "Green Horizons Alliance" </h2>
        <div className="bg-yellow-400 text-gray-900 p-4 mt-4 rounded-md inline-block shadow-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="800">
          <p>
            Chemistry Week merupakan acara tahunan yang diadakan oleh
            <span className="font-bold"> departemen Kimia</span> Fakultas Sains dan Analitik Data Institut Teknologi Sepuluh Nopember. 
            Acara utamanya adalah <span className="font-bold"> Reaction, NCC, dan Spectrum</span>.
          </p>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mt-8 font-montserrat font-extrabold" data-aos="fade-up" data-aos-delay="1000">
          Uniting for Nature: Together, Let's Create Sustainable Change
        </p>
      </div>
      <img src="/left-leaf.png" alt="Left Leaf" className="absolute left-0 bottom-0 w-24 sm:w-36 md:w-48 lg:w-64" data-aos="fade-up" data-aos-delay="1200"/>
      <img src="/right-leaf.png" alt="Right Leaf" className="absolute right-0 bottom-0 w-24 sm:w-36 md:w-48 lg:w-64" data-aos="fade-up" data-aos-delay="1400"/>
      <img src="/left-star.png" alt="Top Star" className="absolute top-0 left-0 w-12 sm:w-16 md:w-24 lg:w-32" data-aos="fade-up" data-aos-delay="1600"/>
      <img src="/right-star.png" alt="Top Star" className="absolute top-0 right-0 w-12 sm:w-16 md:w-24 lg:w-32" data-aos="fade-up" data-aos-delay="1800"/>
    </div>
  );
}
