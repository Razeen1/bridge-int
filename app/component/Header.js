import {ArrowUpRight, ChevronDown, Facebook, Instagram, Linkedin, Mail, Menu, Phone} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Header() {
    return (
        <>
            {/*Top Bar*/}
            <div className="bg-green-800 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14}/>
              +977 9876543211
            </span>
                        <span className="flex items-center gap-2">
              <Mail size={14}/>
              info@bridgeinl.com
            </span>
                    </div>
                    <div className="flex gap-4">
                        <Facebook size={16}/>
                        <Instagram size={16}/>
                        <Linkedin size={16}/>
                    </div>
                </div>
            </div>
            {/*Nav Bar*/}
            <nav className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Image src='/bridge-logo.png' alt='logo' width='120' height='70'/>

                    {/* Mobile menu button */}
                    <button className="lg:hidden text-gray-700">
                        <Menu size={24}/>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex items-center gap-9 text-sm">
                        <div className="relative group">
                            <button
                                className="cursor-pointer flex items-center gap-1 text-gray-700 hover:text-green-600">
                                Study Abroad
                                <ChevronDown size={16} className="transition-transform group-hover:rotate-180"/>
                            </button>
                            <div
                                className="absolute left-0 mt-2 hidden w-40 rounded-md bg-white shadow-lg group-hover:block">

                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                >
                                    Australia
                                </a>

                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                >
                                    UK
                                </a>

                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                >
                                    USA
                                </a>
                            </div>
                        </div>
                        <a href="#" className="text-gray-700 hover:text-green-600">About Us</a>
                        <div className="relative group">
                            <button
                                className="flex items-center cursor-pointer gap-1 text-gray-700 hover:text-green-600">
                                Services
                                <ChevronDown size={16} className="transition-transform group-hover:rotate-180"/>
                            </button>
                            <div
                                className="absolute left-0 mt-2 hidden w-40 rounded-md bg-white shadow-lg group-hover:block">

                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                >
                                    Career Counseling
                                </a>

                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                >
                                    Test Preparation
                                </a>

                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                >
                                    Pre Departure
                                </a>

                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                                >
                                    Loan and Financial Guiding
                                </a>
                            </div>
                        </div>
                        <a href="#" className="text-gray-700 hover:text-green-600">Resources</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">Contact Us</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">FAQs</a>
                        <button
                            className="cursor-pointer font-semibold flex items-center gap-1 text-white bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800">
                            Check Eligibility
                            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-180"/>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}