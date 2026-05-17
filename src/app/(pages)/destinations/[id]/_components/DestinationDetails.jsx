import React from 'react';
import {
    ArrowLeft, Edit3, MapPin, Star, Calendar, Check, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

export default function DestinationDetails({ id, imageUrl, country, destinationName, duration, price }) {



    return (
        <div className="min-h-screen bg-white p-4 md:p-8 font-sans text-gray-800">
            {/* Top Navigation */}
            <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
                <Link href='/destinations'>
                    <button className="flex items-center text-gray-500 hover:text-black transition-colors text-sm">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Destinations
                    </button>
                </Link>
                <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 border border-gray-200 rounded-sm text-sm hover:bg-gray-50">
                        <Edit3 size={16} className="mr-2" />
                        Edit
                    </button>

                    <DeleteButton id={id} />
                    
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Main Hero Image */}
                <div className="w-full h-[300 md:h-[500px] rounded-sm overflow-hidden mb-8">
                    <img
                        src={imageUrl}
                        alt={destinationName}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex items-center text-gray-500 text-sm mb-2">
                                <MapPin size={14} className="mr-1" />
                                {country}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bali Paradise</h1>

                            <div className="flex items-center space-x-6 text-sm">
                                <div className="flex items-center">
                                    <Star size={16} className="text-green-600 fill-green-600 mr-1" />
                                    <span className="font-bold mr-1">4.9</span>
                                    <span className="text-gray-400">(234 reviews)</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Calendar size={16} className="mr-2" />
                                    {duration}
                                </div>
                            </div>
                        </div>

                        {/* Overview */}
                        <div>
                            <h2 className="text-xl font-bold mb-3">Overview</h2>
                            <p className="text-gray-500 leading-relaxed">
                                Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture.
                                Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h2 className="text-xl font-bold mb-3">Highlights</h2>
                            <p className="text-gray-500 mb-6">
                                Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture.
                                Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                                {[
                                    "Luxury beachfront accommodation",
                                    "Traditional Balinese spa treatment",
                                    "Sunrise trek to Mount Batur",
                                    "Visit Uluwatu Temple at sunset",
                                    "Private beach dinner experience"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-sm text-gray-600">
                                        <Check size={16} className="text-green-500 mr-2" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="border border-gray-100 shadow-xl rounded-sm p-8 sticky top-8">
                            <div className="mb-6">
                                <p className="text-gray-400 text-sm">Starting from</p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-[#109db9]">${price}</span>
                                </div>
                                <p className="text-gray-400 text-xs mt-1">per person</p>
                            </div>

                            <div className="space-y-4">
                                <div className="w-full p-3 bg-gray-50 border border-gray-100 text-sm text-gray-600">
                                    05/15/2026
                                </div>

                                <button className="w-full bg-[#109db9] text-white py-3 rounded-sm font-medium flex items-center justify-center hover:bg-[#0e8ca5] transition-colors">
                                    Book Now
                                    <ArrowRight size={18} className="ml-2" />
                                </button>

                                <div className="pt-4 space-y-3">
                                    {[
                                        "Free cancellation up to 7 days",
                                        "Travel insurance included",
                                        "24/7 customer support"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center text-xs text-gray-500">
                                            <Check size={14} className="text-green-500 mr-2" />
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}