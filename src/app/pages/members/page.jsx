"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import SidebarMenu from "../../components/SidebarMenu";
import membersData from "./membersData";
import Link from "next/link";
import { Users, Grid3x3 } from "lucide-react";
import Footer from "@/app/components/Footer";

const Members = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [viewMode, setViewMode] = useState("grid");

    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
        >
            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            <div className="relative z-10 p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="border p-2 text-white rounded-md bg-purple-700 flex items-center gap-2">
                        <Users className="w-6 h-6" />
                        <h1>Member Family To Jannah</h1>
                    </div>
                    <button 
                        onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                        className="bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800 transition"
                    >
                        <Grid3x3 />
                    </button>
                </div>

                <div className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1"} gap-4`}>
                    {membersData.map((member) => (
                        <Link href={`members/${member.id}`} key={member.id}>
                            <div className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-all transform hover:scale-105 cursor-pointer">
                                <img
                                    src={member.image}
                                    className="w-full rounded-xl object-cover aspect-square"
                                    alt={member.name}
                                />
                                <p className="text-white text-center mt-2">{member.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <SidebarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Footer/>
        </div>
    );
};

export default Members;