
// import { tourService } from '@/services/tourService';
// import { useRouter } from 'next/navigation';
// import { revalidateAnyPath } from '@/app/actions/revalidate';
import Title from '@/components/ui/Title';
import { tourService } from '@/services/tourService';
import EditForm from './_components/EditForm';

const EditPage = async ({ params }) => {
    const { id } = await params;

    const destination = await tourService.getSingleDestination(id);
    console.log(destination);

    const { catagory, country, departureDate, description, destinationName, imageUrl, price,duration } = destination;

    

    return (

        <div className="min-h-screen bg-white p-8 md:p-16 font-sans text-gray-800">
            {/* Page Title */}
            <Title className="mb-12">Update Your Package</Title>


            {/* Form Card */}
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-gray-100 shadow-2xl rounded-sm">
                <EditForm
                    id={id}
                    catagory={catagory}
                    country={country}
                    departureDate={departureDate}
                    description={description}
                    destinationName={destinationName}
                    imageUrl={imageUrl}
                    price={price}
                    duration={duration}
                />
            </div>
        </div>

    );
};

export default EditPage;

