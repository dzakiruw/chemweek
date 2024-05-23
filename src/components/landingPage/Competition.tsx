"use client";

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa6";

export default function Competition() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
        });
    }, []);

    const data = [
        {
            title: "National Chemistry Challenge",
            description: (<>NCC adalah Olimpiade Kimia Tingkat Nasional untuk <strong> SMA/SMK/Sederajat </strong> yang Diselenggarakan Oleh Departemen Kimia ITS. Dimana pesertanya adalah pelajar SMA/SMK/MA sederajat kelas X/XI/XII di Indonesia dan masih terdaftar sebagai siswa/i pada saat NCC berlangsung dengan jumlah peserta 2 orang per tim dari sekolah yang sama serta tidak harus dari angkatan yang sama.</>),
            button_link: "https://docs.google.com/forms/d/e/1FAIpQLSdhiqVd-Kkmb2seAN0EhMsbL1RH0odDdt5Jv3QU_PT_UbrSHw/viewform?pli=1",
            guidebook_link: "https://drive.google.com/file/d/170zuMsIyZV9sXlRPXTlgdougAFF_kMLc/view" // Tambahkan link guidebook
        },
        {
            title: "REACTION",
            description: (<>Research of Applied Chemistry Competition adalah <strong>kompetisi karya tulis ilmiah inovatif tingkat nasional dengan luaran sebuah prototype/poster.</strong> Diikuti oleh mahasiswa/i program pendidikan D3/D4/S1.</>),
            button_link: "https://docs.google.com/forms/d/1Fr49yTqMkwvLj0Uk1NXtzlj8CM3R4mVYTYKpxp2yPzE/viewform?edit_requested=true#settings",
            guidebook_link: "https://drive.google.com/file/d/118MMD4OpxKYcehXnGcTvV4lECVFbnbff/view" // Tambahkan link guidebook
        },
        {
            title: "SPECTRUM",
            description: (<>Acara puncak dari Chemistry Week 16 yang bertujuan untuk memperkenalkan Departemen Kimia ITS melalui <strong>rangkaian acara “show” seperti exhibition, talkshow, dll.</strong></>),
            button_link: undefined,
            guidebook_link: undefined // Tidak ada link guidebook
        },
    ];

    return (
        <div className="min-h-screen py-4 bg-gradient-to-b from-yellow-400 to-[#079247] items-center justify-center flex flex-col gap-6 px-6 sm:px-14 md:px-24 xl:px-0">
            {data.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl w-full mx-auto px-8 py-8 sm:px-12 sm:py-10 lg:px-16 lg:py-12 xl:px-16 xl:py-12 lg:w-[760px]"
                        data-aos="fade-up"
                    >
                        <h5 className="text-center text-[#0E5369] font-bold text-xl md:text-3xl pb-4 md:pb-6">{item.title}</h5>
                        <p className="text-start text-[#0E5369] leading-tight pb-3 md:pb-4">{item.description}</p>
                        {item.button_link && item.guidebook_link ? (
                            <div className="flex space-x-4 justify-center">
                                <button className="bg-[#597599] text-white px-3 py-2">
                                    <div className="flex space-x-2">
                                        <a href={item.button_link} target="_blank" rel="noopener noreferrer">Registration</a>
                                        <FaArrowRight className="h-full pt-1" />
                                    </div>
                                </button>
                                <button className="bg-[#597599] text-white px-3 py-2">
                                    <div className="flex space-x-2">
                                        <a href={item.guidebook_link} target="_blank" rel="noopener noreferrer">Guidebook</a>
                                        <FaArrowRight className="h-full pt-1" />
                                    </div>
                                </button>
                            </div>
                        ) : item.button_link ? (
                            <button className="bg-[#597599] text-white px-3 py-2">
                                <div className="flex space-x-2">
                                    <a href={item.button_link} target="_blank" rel="noopener noreferrer">Registration</a>
                                    <FaArrowRight className="h-full pt-1" />
                                </div>
                            </button>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
