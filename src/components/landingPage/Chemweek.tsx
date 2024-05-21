import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center z-10">
        <div className="relative mb-5 mt-5"> 
          <img src="/center-star.png" alt="Top Star" className="absolute left-1/2 transform -translate-x-1/2 w-80 md:w-112 -mt-3"/>
          <img src="/logo.png" alt="Chemistry Week Logo" className="relative mx-auto" />
        </div>
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-yellow-200 rounded-full shadow-lg h-full w-full"></div>
          <div className="relative px-4 py-1">
          <span className="text-white font-bold font-montserrat md:text-xl lg:text-2xl">Chemistry Week</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white">Get To Know Chemistry Week 16</h1>
        <h2 className="text-2xl font-semibold text-yellow-400 mt-2">"Green Horizons Alliance"</h2>
        <div className="bg-yellow-400 text-gray-900 p-4 mt-4 rounded-md inline-block shadow-lg max-w-xl mx-auto">
          <p>
            Chemistry Week merupakan acara tahunan yang diadakan oleh 
            <span className="font-bold"> departemen Kimia</span> Fakultas Sains dan Analitik Data 
            Institut Teknologi Sepuluh Nopember. Acara utamanya adalah 
            <span className="font-bold"> Reaction, NCC, dan Spectrum</span>.
          </p>
        </div>
        <p className="text-lg text-black mt-8 font-montserrat font-extrabold md:text-xl lg:text-2xl">Uniting for Nature: Together, Let's Create Sustainable Change</p>
      </div>
      <img src="/left-leaf.png" alt="Left Leaf" className="absolute left-0 bottom-0 w-48 md:w-64" />
      <img src="/right-leaf.png" alt="Right Leaf" className="absolute right-0 bottom-0 w-48 md:w-64" />
      <img src="/left-star.png" alt="Top Star" className="absolute top-0 left-0 w-24 md:w-32" />
      <img src="/right-star.png" alt="Top Star" className="absolute top-0 right-0 w-24 md:w-32" />
    </div>
  );
}
