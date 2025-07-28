import "./TripDetailsPage.css";
import { useTripState } from "../../store/Store";
import CardHotelRecomendation from "../../components/CardHotelRecomendation/CardHotelRecomendation";

const TripDetailsPage = () => {
  const trip = useTripState((state) => state.trip);
  localStorage.setItem("trip", JSON.stringify(trip));
  const tripString = localStorage.getItem("trip");
  const tripdata = () => {
    if (trip == null) {
      return tripString ? JSON.parse(tripString) : null;
    }
    return trip;
  };

  return (
    <div className="TripDetails section-layout gap-[2rem]">
      {/* Hero principal */}
      <div className="TripDetails_Hero">
        <div className="TripDetails_Hero__Image">
          <img src={trip?.countryImage} alt="img-hero" />
        </div>

        <div className="TripDetails_Hero__Description">
          <strong className="text-[1.4rem]">{trip?.countryName}</strong>
          <div className="flex justify-center items-center mt-2">
            <div className="flex gap-[1rem] flex-wrap w-full">
              <span className="badge">{trip?.duration}</span>
              <span className="badge">{trip?.budgetLevel} budget</span>
              <span className="badge">Travelers: {trip?.travelers}</span>
            </div>
            <button className="btn-black ml-auto">Share</button>
          </div>
        </div>
      </div>

      {/* Hoteles recomendados */}
      <div className="flex gap-[1rem] justify-between flex-wrap md:flex-nowrap">
        {tripdata()?.hotelOptions?.map((e: any, index: number) => (
          <CardHotelRecomendation key={index}>
            <div className="CardHotelRecomendation__Image">
              <img src={e?.hotelImageUrl} alt="hotel-option" />
            </div>
            <div className="CardHotelRecomendation__Details">
              <strong>{e?.name}</strong>
              <p>{e?.address}</p>
              <p>Price: {e?.Price}</p>
              <p>Rating: {e?.rating}</p>
              <p>{e?.description}</p>
            </div>
          </CardHotelRecomendation>
        ))}
      </div>

      {/* Itinerario diario */}
      <div className="TripDetails_Itinerary mt-[2rem]">
        <h2 className="text-2xl font-bold mb-4">Places to Visit</h2>
        <div className="TripDetails_DaysOptions space-y-6 mt-[2rem]">
          {tripdata()?.itinerary?.map((dayItem: any, index: number) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">Day {dayItem?.day}</h3>
              <div className="flex gap-[1rem] justify-start flex-wrap">
                {dayItem?.dailyPlan?.map((activity: any, i: number) => (
                  <div
                    key={i}
                    className="w-full md:w-[48%] lg:w-[32%] p-4 bg-white shadow-md rounded-xl"
                  >
                    <img
                      src={activity?.imageUrl}
                      alt={activity?.placeName}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <h4 className="text-lg font-bold">{activity?.placeName}</h4>
                    <p className="text-sm text-gray-500">{activity?.description}</p>
                    <div className="text-sm text-gray-600 mt-2">
                      <p><strong>Time:</strong> {activity?.timeToTravel}</p>
                      <p><strong>Duration:</strong> {activity?.duration}</p>
                      <p><strong>Cost:</strong> ${activity?.cost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetailsPage;
