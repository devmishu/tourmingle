import DestinationCard from "@/components/cards/DestinationCard";
import Title from "@/components/ui/Title";
import { tourService } from "@/services/tourService";


const AllDestinationPage = async () => {

    const allDestinations = await tourService.getAllDestinations();

    return (
        <div className='app-container'>
            <Title className="font-bold mb-10">All Destinations:{allDestinations.length}</Title>
            <div className="grid gap-20 md:grid-cols-3">
                {
                    allDestinations.map(destination => <DestinationCard
                        key={destination._id}
                        id={destination._id}
                        imageUrl={destination.imageUrl}
                        country={destination.country}
                        destinationName={destination.destinationName}
                        duration={destination.duration}
                        price={destination.price}
                    />)
                }
            </div>

        </div>
    );
};

export default AllDestinationPage;
