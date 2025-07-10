import './Createtrip.css';
import { useRef, useState } from "react";
import { Dropdown} from 'primereact/dropdown';
import CardOption from '../../components/CardOption/CardOption';
import {InputNumber} from 'primereact/inputnumber';
import AIModel from '../../services/AIModel';
import { useNavigate } from 'react-router';
import { Toast } from 'primereact/toast';
import { useTripState } from '../../store/Store';

interface Country {
    name: string;
    code: string;
}

const CreatetripPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [value] = useState(0);
  const [plannedDays,setplannedDays] = useState<number | null>(0);
  const [budget,setBudget] = useState<string>();
  const [travelMode, setTravelMode] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useRef<Toast>(null);
  const { setTrip } = useTripState.getState();
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

  const navigator = useNavigate();



  const handleSelectedCountry = (country:Country)=>{
    setSelectedCountry(country.name)
    console.log(selectedCountry);
  }


  const promptString = `Generate Travel Plan for Location : ${selectedCountry} for ${plannedDays} Days for ${travelMode} with a ${budget}, Give me a Hotels options list with 
                        HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName,
                        Place Details, Place image url, Geo Coordinates, ticket Pricing, Time t travel each of the location for ${plannedDays} days with each day 
                        plan with best time to visit in JSON format. Give me a string that i can easily stringyfy in javascript`

  const budgetCardsInfo = [
    {icon:"💵", title:"Cheap", description:"Stay conscious of costs",},
    {icon:"💰", title:"Moderate", description:"Keep cost on the average side",},
    {icon:"💸", title:"Luxury", description:"Dont worry about cost",}
  ]

  const travelingMode  = [
    {icon:"✈️", title:"Just Me", description:"A sole traveles in exploration",},
    {icon:"🥂", title:"A Couple", description:"Two traveles in tandem",},
    {icon:"🏡", title:"Family", description:"A group of fun loving adv",}
  ]

const handleAIConsult = async()=>{
  if(plannedDays == 0 && budget == "" && travelMode == ""){
    showError("All options should be selected")
  }
  try {
    setIsLoading(true)
    const response = await AIModel(promptString);
    setIsLoading(false);
    console.log("ESTO SE SUPONE QUE FUNCIONA")
    console.log(response)
    setTrip(response);
    navigator('/trip-details');
  } catch (error) {
    console.log("the request was not successed");
  }
}

  const showError = (message:string):void => {
    toast.current?.show({severity:'error', summary: 'Error', detail:message, life: 3000});
}

  return (
    <>
    {isLoading ? (<div>Cargando...</div>) : (
      <form className="section-layout Createtrip">
          <div className="Createtrip_TopDescription">
        <p className='text-[1.5rem] font-bold'>Tell us your travel preferences 🏕️🌴</p>
        <p className='text-slate-800'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>
      </div>
      <div className="Createtrip_Content">
        <div>
          <strong>What is destination of choice?</strong>
          <Dropdown value={selectedCountry} onChange={(e) =>  handleSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
            className="w-[100%] md:w-14rem" />
            
        </div>

        <div className='flex flex-col'>
          <strong>How many days are you planning your trip?</strong>
          <InputNumber onChange={(e)=>setplannedDays(e.value)} min={0} value={value} showButtons />
        </div>

        {/* first section */}
        <div className='w-full'>
          <strong>What is Your Budget?</strong>
          <div className='flex gap-[1rem] justify-between flex flex-wrap md:flex-nowrap'>
            {budgetCardsInfo.map((e)=>{
              return(
                <CardOption onClick={()=> setBudget(e.title)}>
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
          {travelingMode.map((e)=>{
              return(
                <CardOption onClick={() => setTravelMode(e.title)}>
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
        <div className='btn-black Createtrip_Button__Btn' onClick={()=>handleAIConsult()}>Generate Trip</div>
      </div>
      <Toast ref={toast} />
      </form>
    )}

   
  </>
  )
}

export default CreatetripPage



 