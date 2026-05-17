'use client'
import { ChevronDown } from 'lucide-react';
import React from 'react';
import ActionButton from './ActionButton';
import { tourService } from '@/services/tourService';
import { useRouter } from 'next/navigation';
import { revalidateAnyPath } from '@/app/actions/revalidate';

const TravelForm = () => {
    const router = useRouter()

    const handleAddTravelPackage = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(e.target);
        const travelData = Object.fromEntries(formData.entries());


        try {

            const data = await tourService.createDestination(travelData);

            console.log(data);
            alert(`${data.message}`);
            form.reset();

            revalidateAnyPath("destinations");
            router.push('/destinations');

        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }
    return (

        <form
            onSubmit={handleAddTravelPackage}
            className="space-y-6">

            {/* Destination Name */}
            <div className="space-y-2">
                <label className="block text-sm font-bold">Destination Name</label>
                <input
                    type="text"
                    placeholder="Bali Paradise"
                    name='destinationName'
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder-gray-400"
                />
            </div>

            {/* Country & Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold">Country</label>
                    <input
                        type="text"
                        placeholder="Indonesia"
                        name='country'
                        className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder-gray-400"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold">Category</label>
                    <div className="relative">
                        <select className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-500"
                            name='catagory'
                        >
                            <option>Beach</option>
                            <option>Mountain</option>
                            <option>City</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
            </div>

            {/* Price & Duration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold">Price (USD)</label>
                    <input
                        type="text"
                        placeholder="e.g., 1299"
                        name='price'
                        className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder-gray-400"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold">Duration</label>
                    <input
                        type="text"
                        placeholder="e.g., 7 Days/6 Nights"
                        name='prdurationice'
                        className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Departure Date */}
            <div className="space-y-2">
                <label className="block text-sm font-bold">Departure Date</label>
                <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    name='departureDate'
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder-gray-400"
                />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
                <label className="block text-sm font-bold">Image URL</label>
                <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    name='imageUrl'
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder-gray-400"
                />
            </div>

            {/* Description */}
            <div className="space-y-2">
                <label className="block text-sm font-bold">Description</label>
                <textarea
                    rows={5}
                    placeholder="Describe the travel experience..."
                    name='description'
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder-gray-400 resize-none"
                />
            </div>



            {/* Action Buttons */}
            <ActionButton />
        </form>
    );
};

export default TravelForm;