// File: app/members/[id]/page.jsx
"use client";
import { useRouter } from "next/navigation"; // Gunakan useRouter dari next/navigation
import membersData from "../membersData";
import React from "react";


const MemberDetail = ({ params }) => {
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
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <p className="text-gray-700">{member.description}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberDetail;