"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import AuthButtons from './AuthButtons'; // এখানে প্রোফাইল/লগইন লজিক থাকবে

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* ডেস্কটপ মেনু */}
                    <NavLinks links={navLinks} className="hidden md:flex space-x-8" />

                    {/* লোগো */}
                    <Link href="/" className="text-3xl font-extrabold text-[#1DA1C1]">Wanderlast</Link>

                    {/* অথেন্টিকেশন পার্ট (JWT এর জন্য এটি আলাদা করা জরুরি) */}
                    <AuthButtons className="hidden md:flex" />

                    {/* মোবাইল বাটন */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* মোবাইল মেনু আলাদা কম্পোনেন্ট হতে পারে */}
            {isOpen && <MobileMenu links={navLinks} setIsOpen={setIsOpen} />}
        </nav>
    );
};