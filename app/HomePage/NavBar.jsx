import Image from "next/image";
import { FaQuestionCircle } from "react-icons/fa";
import { RiCurrencyLine } from "react-icons/ri";
import { assets } from "@/Assets/assets";
import Link from "next/link";
import Container from "../componenets/container/Container";

export default function NavBar() {
  const navLinks = (
    <>
      <li>
        <Link href="/" className="text-[#EB662B] text-base font-normal">Home</Link>
      </li>
      <li>
        <Link href="/" className="text-base font-normal text-[#05073C]">Tour</Link>
      </li>
      <li>
        <Link href="/" className="text-base font-normal text-[#05073C]">Destination</Link>
      </li>
      <li>
        <Link href="/" className="text-base font-normal text-[#05073C]">Activities</Link>
      </li>
      <li>
        <Link href="/" className="text-base font-normal text-[#05073C]">Pages</Link>
      </li>
      <li>
        <Link href="/" className="text-base font-normal text-[#05073C]">Contact</Link>
      </li>
    </>
  );
  

  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-sky-500 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center space-x-2 text-base font-normal">
                  <RiCurrencyLine /> <span>USD</span>
                </button>
                <button className="flex items-center space-x-2 text-base font-normal">
                  <FaQuestionCircle /> <span>Help</span>
                </button>
              </div>
            </ul>
          </div>
          <Image src={assets.logo} alt="logo" width={167} height={32} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-8">
        <button className="hidden md:block text-base font-normal text-[#05073C]">
            USD
          </button>
          <button className="hidden md:block text-base font-normal text-[#05073C]">
            Help
          </button>
          <button className="text-base font-normal text-[#05073C]">Sign Up</button>
          <button className="text-base font-normal text-[#05073C] border border-[#05073C] px-4 py-2 rounded-full">
            Login
          </button>
        </div>
      </div>
    </Container>
  );
}
