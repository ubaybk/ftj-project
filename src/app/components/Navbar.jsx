"use client"
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return(
        <div className="relative z-10 p-4 flex justify-between items-center backdrop-blur-md bg-transparent bg-opacity-50 rounded-lg">
        {/* Logo atau Judul */}
        <Link href={'/'}>
        <div className="flex">
          <img src="/images/logoFTJ.png" className="w-10" alt="" />
          <h1 className="text-white text-2xl font-bold">Family To Jannah</h1>
        </div>
        </Link>
        <div className="hidden md:flex justify-center items-center gap-10 text-white">
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            Home
          </h1>
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            About
          </h1>
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            Contact
          </h1>
          <Link href={"/pages/members"}>
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            Member
          </h1>
          </Link>
        </div>

        {/* Hamburger menu */}
        <div
          className="text-white text-4xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    )
}

export default Navbar