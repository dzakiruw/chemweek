import React from 'react';

const SecondSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center bg-blend-exclusion" style={{ backgroundImage: "url('/background.png')", backgroundSize: 'contain', opacity: 0.5 }} />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left relative z-10 w-full">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img src="/mascot.png" alt="Mascot" className="w-48 md:w-64" />
        </div>
        <div className="md:ml-8 max-w-md w-full">
          <div className="flex items-baseline mb-4 justify-center md:justify-start">
            <h2 className="text-2xl font-bold text-black mr-2">OUR</h2>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-yellow-400 shadow-lg w-full h-full"></div>
              <h2 className="relative text-2xl font-bold text-black px-2 py-1">THEME</h2>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-yellow-400 text-stroke mb-4">Green Horizons Alliance</h3>
          <p className="bg-yellow-400 text-gray-900 p-4 mt-4 rounded-md inline-block shadow-lg">
            <span className="font-bold">"Green Horizons"</span> menggambarkan bahwa CW 16 mendukung adanya inovasi hijau dan kemajuan dalam menjaga lingkungan
            <br /><span className="font-bold">"Alliance"</span> Sekelompok individu yang bekerjasama dan memiliki 1 tujuan
            <br /><span className="font-bold">"Green Horizons Alliance"</span> berarti sekelompok individu yang memiliki tujuan untuk melakukan inovasi hijau dan kemajuan dalam menjaga lingkungan
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
