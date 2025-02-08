"use client";
import { useRouter } from "next/navigation"; // Gunakan useRouter dari next/navigation
import membersData from "../membersData";
import React from "react";

const MemberDetail = ({ params }) => {
    const router = useRouter(); // Inisialisasi useRouter
    const { id } = React.use(params); // Buka nilai dari Promise menggunakan React.use()
    console.log("ID dari URL:", id); // Debugging

    if (!id) {
        return <div>Loading...</div>;
    }

    const member = membersData.find((m) => m.id === parseInt(id));
    if (!member) {
        return <div>Member tidak ditemukan</div>;
    }

    return (
        <div className="min-h-screen bg-cover bg-center relative p-4" style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 p-4">
                {/* Tombol Back */}
                <button
                    onClick={() => router.back()} // Kembali ke halaman sebelumnya
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition duration-300"
                >
                    ← Back
                </button>

                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-auto object-contain rounded-md mb-4"
                    />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h2>

                    {/* Description dengan UI yang diperbaiki */}
                    <div className="text-gray-700 space-y-2">
                        {member.description.map((line, index) => (
                            <p key={index} className="flex items-center">
                                {/* Ikon atau Emoji */}
                                <span className="mr-2 text-lg text-blue-500">•</span>
                                {/* Deskripsi */}
                                <span>{line}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberDetail;