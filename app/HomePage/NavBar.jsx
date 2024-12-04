'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuestionCircle } from "react-icons/fa";
import { RiCurrencyLine } from "react-icons/ri";
import { assets } from "@/Assets/assets";
import Link from "next/link";
import Container from "../componenets/container/Container";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-[#EB662B] text-base font-semibold hover:text-orange-500 transition-colors"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[#05073C] text-base font-semibold hover:text-blue-500 transition-colors"
        >
          Tour
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[#05073C] text-base font-semibold hover:text-green-500 transition-colors"
        >
          Destination
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[#05073C] text-base font-semibold hover:text-teal-500 transition-colors"
        >
          Activities
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[#05073C] text-base font-semibold hover:text-purple-500 transition-colors"
        >
          Pages
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[#05073C] text-base font-semibold hover:text-pink-500 transition-colors"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-orange-200 shadow-md" : "bg-transparent"
      } z-50`}
    >
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-sky-500 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
                <div className="flex items-center justify-between mt-4">
                  <button className="flex items-center space-x-2 text-base font-semibold hover:text-orange-500">
                    <RiCurrencyLine /> <span>USD</span>
                  </button>
                  <button className="flex items-center space-x-2 text-base font-semibold hover:text-orange-500">
                    <FaQuestionCircle /> <span>Help</span>
                  </button>
                </div>
              </ul>
            </div>
            <Image src={assets.logo} alt="logo" width={167} height={32} />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end space-x-8">
            <button className="hidden md:block text-base font-semibold text-[#05073C] hover:text-orange-500">
              USD
            </button>
            <button className="hidden md:block text-base font-semibold text-[#05073C] hover:text-orange-500">
              Help
            </button>
            <button className="text-base font-semibold text-[#05073C] hover:bg-orange-500 hover:text-white transition-all px-4 py-2 hover:border-0 rounded-full border border-[#05073C]">
              Login
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

