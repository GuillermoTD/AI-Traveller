import "./TripDetailsPage.css"
import { useTripState } from '../../store/Store';

const TripDetailsPage = ()=>{
    const trip = useTripState(state => state.trip);
    console.log(trip);

    return(
        <div>TripDetailsPage</div>
    )
}


export default TripDetailsPage