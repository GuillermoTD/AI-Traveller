import "./TripDetailsPage.css";
import { useTripState } from "../../store/Store";
import CardHotelRecomendation from "../../components/CardHotelRecomendation/CardHotelRecomendation";

const TripDetailsPage = () => {
  const trip = useTripState((state) => state.trip);
  console.log(trip);

  return (
    <div className="TripDetails section-layout">
      <div className="TripDetails_Hero">
        <div className="TripDetails_Hero__Image">
          <img src={trip.countryImage} alt="img-hero" />
        </div>

        <div className="TripDetails_Hero__Description">
          <strong className="text-[1.4rem]">Las Vegas, NV,Usa</strong>
          <div className="flex justify-center">
            <div className="flex gap-[1rem] w-full ">
              <span className="badge">2 day</span>
              <span className="badge">moderate budget</span>
              <span className="badge">no. of traveler 5 to 10 people</span>
            </div>
            <button className="btn-black">Share</button>
          </div>
        </div>
      </div>
      <div className="flex gap-[1rem] justify-between flex-wrap md:flex-nowrap">
        {/* {trip.itinerary.map((e,index) => {
          return (
            <CardHotelRecomendation key={index}>
              <div className="CardHotelRecomendation__Image">
                <img
                  src={e.hotelOptions[0].hotelImageUrl}
                  alt="hotel-option"
                />
              </div>
              <div className="CardHotelRecomendation__Details">
                <strong>{trip.hotelOptions[0].name}</strong>
                <p>{trip.hotelOptions[0].address}</p>
                <p>Price: {trip.hotelOptions[0].Price}</p>
                <p>Rating: {trip.hotelOptions[0].rating}</p>
                <p>{trip.hotelOptions[0].description}</p>
              </div>
            </CardHotelRecomendation>
          );
        })} */}
      </div>
    </div>
  );
};

export default TripDetailsPage;
