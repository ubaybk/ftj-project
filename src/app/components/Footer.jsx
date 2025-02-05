import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-8">
                {/* Logo FTJ */}
                <div className="flex justify-center md:justify-start">
                    <img src="/images/logoFTJ.png" className="w-32 h-auto" alt="Logo FTJ" />
                </div>

                {/* SosMed */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
                    <div className="flex space-x-5 text-3xl">
                        <FaInstagram />
                        <FaTiktok />
                    </div>
                </div>

                {/* Platform Streaming */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold mb-3">Streaming Platform</h2>
                    <div className="flex space-x-5 text-3xl">
                        <FaSpotify />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
