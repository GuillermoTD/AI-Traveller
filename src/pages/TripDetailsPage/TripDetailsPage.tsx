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
  // const trip = tripdata ? JSON.parse(tripdata) : null;
  console.log(tripdata);
  // const tripData = localStorage.getItem("trip");
  // const trip = tripData ? JSON.parse(tripData) : null;

  return (
    <div className="TripDetails section-layout">
      <div className="TripDetails_Hero">
        <div className="TripDetails_Hero__Image">
          <img src={trip?.countryImage} alt="img-hero" />
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
        {tripdata()?.hotelOptions?.map((e: any, index: number) => {
          return (
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
          );
        })}
      </div>
      <div>Places to Visit</div>

      <div className="TripDetails_DaysOptions">
        {tripdata()?.itinerary?.map((dayItem: any, index: number) => {
          return (
            <div key={index}>
              <span>
                <strong>{dayItem?.day}</strong>
                hola
              </span>
              <div className="flex gap-[1rem] justify-between flex-wrap md:flex-nowrap"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TripDetailsPage;
