"use client"
import { useState } from 'react';
import { Mail, Phone, Instagram, Youtube } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import { motion } from 'framer-motion';
import { FaTiktok } from "react-icons/fa";


const Contact = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    
    return (
        <div className="min-h-screen bg-cover bg-center relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/50" />
            
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            <motion.main 
                className="relative z-10 container mx-auto px-4 py-16"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div 
                    className="max-w-4xl mx-auto bg-white/90  rounded-2xl shadow-2xl p-8 border border-white/20"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.h1 
                        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                        variants={itemVariants}
                    >
                        Connect With Us
                    </motion.h1>
                    
                    {/* Business Contact Section */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">For PR and Business Purpose</h2>
                        <div className="space-y-3">
                            <motion.div 
                                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:shadow-md transition-all"
                                whileHover={{ x: 10 }}
                            >
                                <div className="bg-blue-500 p-2 rounded-full">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <p>+6289526603943</p>
                            </motion.div>
                            <motion.div 
                                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:shadow-md transition-all"
                                whileHover={{ x: 10 }}
                            >
                                <div className="bg-blue-500 p-2 rounded-full">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <p>familytojannahid@gmail.com</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    {/* Friends Section */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <h2 className="text-2xl font-semibold mb-4 text-purple-600">For Friends and Fans</h2>
                        <motion.div 
                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:shadow-md transition-all"
                            whileHover={{ x: 10 }}
                        >
                            <div className="bg-purple-500 p-2 rounded-full">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <p>familytojannahid@gmail.com</p>
                        </motion.div>
                    </motion.div>
                    
                    {/* Team Section */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Our Team</h2>
                        <p className="font-medium mb-2">Lead by Dr. Luigi Team:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                "Franka Soeria",
                                "Hasrika",
                                "Hamimi Daulay",
                                "Ditto S.",
                                "Adriel Putra",
                                "Riska Julya",
                                "Deriendri Dhanny"
                            ].map((name, index) => (
                                <motion.div 
                                    key={index} 
                                    className="bg-pink-50 p-3 rounded-lg hover:shadow-md transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Social Media Section */}
{/* Social Media Section */}
<motion.div variants={itemVariants}>
    <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
        Follow Our Social Media
    </h2>
    <div className="space-y-3">
        {/* Instagram */}
        <a href="https://www.instagram.com/familytojannah.id" target="_blank" rel="noopener noreferrer" className="block">
            <motion.div 
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md transition-all"
                whileHover={{ x: 10, scale: 1.02 }}
            >
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                    <Instagram className="w-5 h-5 text-white" />
                </div>
                <p>@familytojannah.id</p>
            </motion.div>
        </a>

        {/* TikTok */}
        <a href="https://www.tiktok.com/@familytojannah" target="_blank" rel="noopener noreferrer" className="block">
            <motion.div 
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-all"
                whileHover={{ x: 10, scale: 1.02 }}
            >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full">
                    <FaTiktok className="w-5 h-5 text-white" />
                </div>
                <p>familytojannah</p>
            </motion.div>
        </a>

        {/* YouTube */}
        <a href="https://www.youtube.com/@Ftjid" target="_blank" rel="noopener noreferrer" className="block">
            <motion.div 
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg hover:shadow-md transition-all"
                whileHover={{ x: 10, scale: 1.02 }}
            >
                <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-full">
                    <Youtube className="w-5 h-5 text-white" />
                </div>
                <p>FTJID (Family To Jannah)</p>
            </motion.div>
        </a>
    </div>
</motion.div>
                </motion.div>
            </motion.main>
        </div>
    );
}

export default Contact;