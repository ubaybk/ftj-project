"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative z-10 p-4 flex justify-between items-center backdrop-blur-md bg-transparent bg-opacity-50 rounded-lg">
      {/* Logo atau Judul */}
      <Link href={"/"}>
        <div className="flex gap-2">
          <img src="/images/logoFTJ.png" className="w-14" alt="" />
          <img src="/images/fontFtj.png" className="w-32" alt="" />
        </div>
      </Link>
      <div className="hidden md:flex justify-center items-center gap-10 text-white">
        <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
          Home
        </h1>
        <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
          About
        </h1>
        <Link href={"/pages/contact"}>
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            Contact
          </h1>
        </Link>
        <Link href={"/pages/members"}>
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            Member
          </h1>
        </Link>
        <Link href={"/pages/mediaCollaboration"}>
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            Media & Collaborations
          </h1>
        </Link>
        <Link href={"/pages/musicVideo"}>
          <h1 className="cursor-pointer hover:text-gray-300 transition-colors">
            Music & Video
          </h1>
        </Link>
      </div>

      {/* Hamburger menu */}
      <div
        className="text-white text-4xl cursor-pointer md:hidden z-50"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
