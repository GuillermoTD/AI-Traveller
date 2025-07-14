import './Createtrip.css';
import {  useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import CardOption from '../../components/CardOption/CardOption';
import { InputNumber } from 'primereact/inputnumber';
import AIModel from '../../services/AIModel';
import { useNavigate } from 'react-router';
import { useTripState } from '../../store/Store';
import { SaveAITrip } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';

interface Country {
  name: string;
  code: string;
}

const CreatetripPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [value] = useState(0);
  const [plannedDays, setplannedDays] = useState<number | null>(0);
  const [budget, setBudget] = useState<string>();
  const [travelMode, setTravelMode] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setTrip } = useTripState.getState();
  const navigator = useNavigate();
  const isSelected = (selectedValue: string | undefined, title: string): boolean => {
    return selectedValue === title;
  };
  

  const notify = (message:string) => toast.error(message, {
    position: 'bottom-right',
  });



  const countries: Country[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'Japan', code: 'JP' },
    { name: 'United States', code: 'US' }
  ];


  const promptString = `Generate Travel Plan for Location : ${selectedCountry} for ${plannedDays} Days for ${travelMode} with a ${budget}, Give me a Hotels options list with 
                        HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName,
                        Place Details, Place image url, Geo Coordinates, ticket Pricing, Time t travel each of the location for ${plannedDays} days with each day 
                        plan with best time to visit in JSON format. Give me a string that i can easily stringyfy in javascript`

  const budgetCardsInfo = [
    { icon: "💵", title: "Cheap", description: "Stay conscious of costs", },
    { icon: "💰", title: "Moderate", description: "Keep cost on the average side", },
    { icon: "💸", title: "Luxury", description: "Dont worry about cost", }
  ]

  const travelingMode = [
    { icon: "✈️", title: "Just Me", description: "A sole traveles in exploration", },
    { icon: "🥂", title: "A Couple", description: "Two traveles in tandem", },
    { icon: "🏡", title: "Family", description: "A group of fun loving adv", }
  ]

  const handleAIConsult = async () => {

    if (plannedDays == 0 && budget == "" && travelMode == "") {
      notify("Complete all the fields")
      console.log("to ta vacio")
      return
    }
    
    const optionSelectedData = {
      selectedCountry,
      plannedDays,
      budget,
      travelMode
    }

    // validamos si los datos del usuario estan guardados en el localstorage
    let UserData = null;

    if (localStorage.getItem("user")) {
      UserData = JSON.parse(localStorage.getItem("user")!);
    } else {
      UserData = null;
    }
 
    console.log(UserData)

    try {
      setIsLoading(true)
      document.body.classList.add("overflow-y-hidden","relative");
      const response = await AIModel(promptString);
      setIsLoading(false);
      document.body.classList.remove("overflow-y-hidden");
      setTrip(response);
      console.log(response)
      SaveAITrip(optionSelectedData, response, UserData?.email, UserData.uid)
  
      navigator('/trip-details');
    } catch (error) {
      console.log("the request was not successed");
    }
  }

  return (
    <>
        <form className="section-layout Createtrip ">
          {
            isLoading ? ( <div className="Createtrip_Loader">
            <div className="Loader"></div>
          </div>) : null
          }
         
          <div className="Createtrip_TopDescription">
            <p className='text-[1.5rem] font-bold'>Tell us your travel preferences 🏕️🌴</p>
            <p className='text-slate-800'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
            </p>
          </div>
          <div className="Createtrip_Content">
            <div>
              <strong>What is destination of choice?</strong>
              <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country"
                className="w-[100%] md:w-14rem" />
            </div>

            <div className='flex flex-col'>
              <strong>How many days are you planning your trip?</strong>
              <InputNumber onChange={(e) => setplannedDays(e.value)} min={0} value={value} showButtons />
            </div>

            {/* first section */}
            <div className='w-full'>
              <strong>What is Your Budget?</strong>
              <div className='flex gap-[1rem] justify-between flex flex-wrap md:flex-nowrap'>
                {budgetCardsInfo.map((e) => {
                  
                  return (
                    <CardOption key={e.title} isSelected={isSelected(budget,e.title)} onClick={
                      () => {
                        setBudget(e.title)
                      }
                      }>
                      <p className='icon'>{e.icon}</p>
                      <strong>{e.title}</strong>
                      <p>{e.description}</p>
                    </CardOption>
                  )
                })}
              </div>
            </div>

            <div className='w-full'>
              <strong>Who do you plan on traveling with on your next adventure?</strong>
              <div className='flex gap-[1rem] justify-between flex flex-wrap md:flex-nowrap'>
                {travelingMode.map((e) => {
                  return (
                    <CardOption key={e.title} isSelected={isSelected(travelMode,e.title)} onClick={() => setTravelMode(e.title)}>
                      <p className='icon'>{e.icon}</p>
                      <strong>{e.title}</strong>
                      <p>{e.description}</p>
                    </CardOption>
                  )
                })}
              </div>
            </div>

          </div>
          <div className="Createtrip_Button ">
            <div className='btn-black Createtrip_Button__Btn' onClick={() => handleAIConsult()}>Generate Trip</div>
          </div>
          <ToastContainer />
        </form>
      


    </>
  )
}

export default CreatetripPage



