"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import SidebarMenu from "../../components/SidebarMenu";
import Footer from "../../components/Footer";

const Members = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk hamburger menu

    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
        >
            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="relative z-10 p-4">
                <div className="border p-2 text-white rounded-md bg-purple-700">
                <h1>Member Family To Jannah</h1>

                </div>
                <div className="flex flex-col justify-center w-fit p-2 gap-2 md:grid grid-cols-4">
                    {/* Gambar-gambar */}
                    <img
                        src="/images/ftjMembers/adila.jpg"
                        className="mb-4 rounded-xl object-cover"
                        alt=""
                    />
                    <img
                        src="/images/ftjMembers/adila.jpg"
                        className="mb-4 rounded-xl object-cover"
                        alt=""
                    />
                    <img
                        src="/images/ftjMembers/adila.jpg"
                        className="mb-4 rounded-xl object-cover"
                        alt=""
                    />
                    <img
                        src="/images/ftjMembers/adila.jpg"
                        className="mb-4 rounded-xl object-cover"
                        alt=""
                    />
                    <img
                        src="/images/ftjMembers/adila.jpg"
                        className="mb-4 rounded-xl object-cover"
                        alt=""
                    />
                    <img
                        src="/images/ftjMembers/adila.jpg"
                        className="mb-4 rounded-xl object-cover"
                        alt=""
                    />
                    <img
                        src="/images/ftjMembers/adila.jpg"
                        className="mb-4 rounded-xl object-cover"
                        alt=""
                    />
                    {/* Ulangi gambar sesuai kebutuhan */}
                </div>
            </div>
            <SidebarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Footer />
        </div>
    );
};

export default Members;