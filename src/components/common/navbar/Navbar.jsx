"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', active: true },
        { name: 'Destinations', href: '/destinations' },
        { name: 'My Bookings', href: '/bookings' },
        { name: 'Add Destinations', href: '/manage-tours/add' }, 
    ];

    return (
        <nav className="w-full bg-white border-b border-gray-200 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Left Side: Navigation Links (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${link.active
                                    ? "text-[#1DA1C1] border-b-2 border-[#1DA1C1] pb-1"
                                    : "text-gray-700 hover:text-[#1DA1C1]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Center: Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-3xl font-extrabold text-[#1DA1C1] tracking-tight">
                            Tourmingle
                        </Link>
                    </div>

                    {/* Right Side: Profile & Auth */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-[#1DA1C1] transition-colors group">
                            <User size={20} className="text-gray-600 group-hover:text-[#1DA1C1]" />
                            <span className="text-sm font-medium">Profile</span>
                        </button>
                        <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-[#1DA1C1]">
                            Login
                        </Link>
                        <Link href="/signup" className="text-sm font-medium text-gray-700 hover:text-[#1DA1C1]">
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-[#1DA1C1] focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>



            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1DA1C1]"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="my-2 border-gray-100" />
                        <Link href="/profile" className="block px-3 py-2 text-base font-medium text-gray-700">Profile</Link>
                        <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-700">Login</Link>
                        <Link href="/signup" className="block px-3 py-2 text-base font-medium text-[#1DA1C1]">Sign Up</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;