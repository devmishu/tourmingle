import { tourService } from "@/services/tourService";
import DestinationDetails from "./_components/DestinationDetails";

const DestinationDetailPage = async ({ params }) => {
    const { id } = await params;
    const destination = await tourService.getSingleDestination(id);
   
    const { _id, imageUrl, country, destinationName, duration, price } = destination;
    

    return (
        <div className='app-container'>
            Destination Detail Page
            <DestinationDetails 
                id={_id}
                imageUrl={imageUrl}
                country={country}
                destinationName={destinationName}
                duration={duration}
                price={price}
            />
        </div>
    );
};

export default DestinationDetailPage;