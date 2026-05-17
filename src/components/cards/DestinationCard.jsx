import { MapPin, Calendar, ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';

const DestinationCard = ({ id, imageUrl, country, destinationName, duration, price }) => {
    return (
        <div className="shadow rounded-sm  bg-white overflow-hidden font-sans">
            {/* Image Container */}
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={imageUrl}
                    className="w-full h-56 object-cover"
                />
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <span className="text-sm font-bold">4.5</span>
                    <Star size={14} className="fill-black text-black" />
                </div>
            </div>

            {/* Content Section */}
            <div className="py-4">
                {/* Location */}
                <div className="flex items-center gap-1 text-gray-500 mb-1">
                    <MapPin size={16} />
                    <span className="text-sm">{country}</span>
                </div>

                {/* Title and Price */}
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-800">{destinationName}</h2>
                    <div className="text-right">
                        <span className="text-xl font-bold text-gray-800">${price}</span>
                        <span className="text-xs text-gray-400">/Person</span>
                    </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{duration}</span>
                </div>

                {/* Action Link */}
                <Link href={`destinations/${id}`}>
                    <button className="flex items-center gap-1 text-[#1DA1C2] font-bold text-sm border-b-2 border-[#1DA1C2] pb-0.5 hover:text-[#1991ae] hover:border-[#1991ae] transition-colors cursor-pointer">
                        BOOK NOW
                        <ArrowUpRight size={18} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;