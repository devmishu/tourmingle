import React from 'react';
import Link from 'next/link';
import { User, Mail, Lock } from 'lucide-react';
import Title from '@/components/ui/Title';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 font-sans">

      {/* Header Section */}
      <div className="text-center mb-8">
        <Title>Create Account</Title>
        
        <p className="text-gray-500 text-lg">
          Start your adventure with Wanderlust
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-[480px] bg-white p-8 md:p-12 border border-[#E9ECEF] shadow-sm rounded-sm">
        <form className="space-y-5">

          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-[#212529]">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#E0E0E0] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1DA1C2] placeholder-gray-400 text-sm"
              />
            </div>
          </div>

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
                placeholder="Create a password"
                className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#E0E0E0] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1DA1C2] placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-[#212529]">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#E0E0E0] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1DA1C2] placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="button"
            className="w-full bg-[#1DA1C2] text-white py-3 font-medium rounded-sm hover:bg-[#1991ae] transition-colors mt-6 shadow-sm"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">Or sign up with</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 py-3 border border-[#E0E0E0] rounded-sm hover:bg-gray-50 transition-colors shadow-sm"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-bold text-[#212529]">Sign Up With Google</span>
          </button>

          {/* Sign In Link */}
          <div className="text-center pt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="text-[#1DA1C2] font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;