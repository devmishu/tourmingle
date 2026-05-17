import React from 'react';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 font-sans">

            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#212529] mb-2 tracking-tight">
                    Welcome Back
                </h1>
                <p className="text-gray-500 text-lg">
                    Resume your adventure with Wanderlust
                </p>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-[480px] bg-white p-8 md:p-12 border border-[#E9ECEF] shadow-sm rounded-sm">
                <form className="space-y-5">

                    {/* Email Address */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-[#212529]">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#E0E0E0] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1DA1C2] placeholder-gray-400 text-sm"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-[#212529]">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#E0E0E0] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1DA1C2] placeholder-gray-400 text-sm"
                            />
                        </div>
                    </div>

                    {/* Remember me & Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1DA1C2] focus:ring-[#1DA1C2]" />
                            <span>Remember me</span>
                        </label>
                        <Link href="#" className="text-[#1DA1C2] font-medium hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="button"
                        className="w-full bg-[#1DA1C2] text-white py-3 font-medium rounded-sm hover:bg-[#1991ae] transition-colors shadow-sm text-sm"
                    >
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-100"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-xs">Or continue with</span>
                        <div className="flex-grow border-t border-gray-100"></div>
                    </div>

                    {/* Google Sign In */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center space-x-2 py-3 border border-[#E0E0E0] rounded-sm hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg"
                            alt="Google"
                            className="w-4 h-4"
                        />
                        <span className="text-sm font-bold text-[#212529]">Sign Up With Google</span>
                    </button>

                    {/* Sign Up Link */}
                    <div className="text-center pt-4">
                        <p className="text-sm text-gray-500">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-[#1DA1C2] font-bold hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;