"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Theme = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden w-full">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat xl:bg-repeat-x bg-center bg-blend-exclusion"
        style={{ backgroundImage: "url('/background.png')", backgroundSize: 'contain', opacity: 0.5 }}
      />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 mb-6 md:mb-0" data-aos="fade-right">
          <img src="/mascot.png" alt="Mascot" className="w-32 sm:w-48 md:w-64 lg:w-80" />
        </div>
        <div className="md:ml-8 max-w-md w-full" data-aos="fade-left">
          <div className="flex items-baseline mb-4 justify-center md:justify-start" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-2">OUR</h2>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-yellow-400 shadow-lg w-full h-full"></div>
              <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-black px-2 py-1">THEME</h2>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-400 text-stroke mb-4" data-aos="fade-up">Green Horizons Alliance</h3>
          <p className="bg-yellow-400 text-gray-900 p-4 mt-4 rounded-md inline-block shadow-lg" data-aos="fade-up">
            <span className="font-bold">"Green Horizons"</span> menggambarkan bahwa CW 16 mendukung adanya inovasi hijau dan kemajuan dalam menjaga lingkungan
            <br />
            <span className="font-bold">"Alliance"</span> Sekelompok individu yang bekerjasama dan memiliki 1 tujuan
            <br />
            <span className="font-bold">"Green Horizons Alliance"</span> berarti sekelompok individu yang memiliki tujuan untuk melakukan inovasi hijau dan kemajuan dalam menjaga lingkungan
          </p>
        </div>
      </div>
    </div>
  );
}

export default Theme;
