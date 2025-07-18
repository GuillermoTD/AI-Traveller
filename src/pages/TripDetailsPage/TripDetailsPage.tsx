import "./TripDetailsPage.css";
import { useTripState } from "../../store/Store";
import CardHotelRecomendation from "../../components/CardHotelRecomendation/CardHotelRecomendation";
import { useEffect, useState } from "react";

// Función segura para parsear JSON
const safeParse = (value: string | null) => {
  try {
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error("Error parsing trip from localStorage", e);
    return null;
  }
};

const TripDetailsPage = () => {
  const tripFromStore = useTripState((state) => state.trip);
  const [trip, setTrip] = useState<any>(null);

  // Solo guardar si hay trip válido
  useEffect(() => {
    if (tripFromStore) {
      localStorage.setItem("trip", JSON.stringify(tripFromStore));
      setTrip(tripFromStore);
    } else {
      const savedTrip = safeParse(localStorage.getItem("trip"));
      setTrip(savedTrip);
    }
  }, [tripFromStore]);

  // Si no hay datos, mostramos mensaje
  if (!trip) {
    return (
      <div className="TripDetails section-layout">
        <h2>Error: No se encontró la información del viaje</h2>
        <p>Vuelve a la página anterior o intenta cargar de nuevo.</p>
      </div>
    );
  }

  // console.log("Trip details:", trip.itinerary[0].dailyPlan);

  return (
    <div className="TripDetails section-layout">
      <div className="TripDetails_Hero">
        <div className="TripDetails_Hero__Image">
          <img
            src={trip?.countryImage || "/fallback.jpg"}
            alt="img-hero"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/fallback.jpg";
            }}
          />
        </div>

        <div className="TripDetails_Hero__Description">
          <strong className="text-[1.4rem]">{trip?.destination || "Destino desconocido"}</strong>
          <div className="flex justify-center">
            <div className="flex gap-[1rem] w-full">
              <span className="badge">{trip?.days || "N/A"} day</span>
              <span className="badge">{trip?.budget || "N/A"} budget</span>
              <span className="badge">
                no. of traveler {trip?.travelers || "N/A"}
              </span>
            </div>
            <button className="btn-black">Share</button>
          </div>
        </div>
      </div>

      <div className="flex gap-[1rem] justify-between flex-wrap md:flex-nowrap">
        {trip?.hotelOptions?.length > 0 ? (
          trip.hotelOptions.map((e: any, index: number) => (
            <CardHotelRecomendation key={index}>
              <div className="CardHotelRecomendation__Image">
                <img
                  src={e?.hotelImageUrl || "/fallback.jpg"}
                  alt="hotel-option"
                  onError={(ev) => {
                    (ev.target as HTMLImageElement).src = "/fallback.jpg";
                  }}
                />
              </div>
              <div className="CardHotelRecomendation__Details">
                <strong>{e?.name || "Sin nombre"}</strong>
                <p>{e?.address || "Sin dirección"}</p>
                <p>Price: {e?.Price || "N/A"}</p>
                <p>Rating: {e?.rating || "N/A"}</p>
                <p>{e?.description || "Sin descripción"}</p>
              </div>
            </CardHotelRecomendation>
          ))
        ) : (
          <p>No hay hoteles disponibles.</p>
        )}
      </div>

      <div className="TripDetails_DaysOptions">
        <h3>Places to Visit</h3>
        {trip?.itinerary?.length > 0 ? (
          trip.itinerary.map((dayItem: any, index: number) => (
           
            <div className="bg-red" key={index}>
              <span>
                <strong>{`Day ${index + 1}`}</strong>
              </span>
              {/* Puedes agregar aquí el contenido del plan diario si existe */}
              <div className="bg-red-500 text-white mt-[4rem] w-[25rem] h-[10rem]">{dayItem?.dayPlan?.map((item:any)=>{
                <div>
                  {item?.theme}
                  <p>esto es para probar</p>
                </div>
                
              })} </div>
              <p>{`hola ${index}`}</p>
            </div>
          ))
        ) : (
          <p>No hay itinerario disponible.</p>
        )}
      </div>
    </div>
  );
};

export default TripDetailsPage;