"use client"
import { revalidateAnyPath } from '@/app/actions/revalidate';
import { tourService } from '@/services/tourService';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation'

const DeleteButton = ({ id }) => {
    const router = useRouter();

    const handleDeleteTravelPackage = async () => {

        try {

            const data = await tourService.deleteDestination(id);

            console.log(data);
            alert(`${data.message}`);

            revalidateAnyPath("destinations");
            router.push('/destinations');


        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }

    return <button
        onClick={handleDeleteTravelPackage}
        className="flex items-center px-4 py-2 border border-red-200 text-red-500 rounded-sm text-sm hover:bg-red-50" >
        <Trash2 size={16} className="mr-2" />
        Cancel
    </button> 
};

export default DeleteButton;