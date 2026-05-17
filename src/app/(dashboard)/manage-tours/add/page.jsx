
import Title from '@/components/ui/Title';
import TravelForm from './_components/TravelForm';


export default function AddTravelPackage() {

   

    return (
        <div className="min-h-screen bg-white p-8 md:p-16 font-sans text-gray-800">
            {/* Page Title */}
            <Title className="mb-12">Add New Travel Package</Title>


            {/* Form Card */}
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-gray-100 shadow-2xl rounded-sm">
                <TravelForm  />
            </div>
        </div> 
    ); 
}