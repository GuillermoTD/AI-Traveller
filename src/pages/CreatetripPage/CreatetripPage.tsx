import './Createtrip.css';
import { useState } from "react";
import { Dropdown} from 'primereact/dropdown';
import CardOption from '../../components/CardOption/CardOption';
import {InputNumber} from 'primereact/inputnumber';

interface Country {
    name: string;
    code: string;
}

const CreatetripPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

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

  const [value] = useState(0);

  const [plannedDays,setplannedDays] = useState<number | null>(0);

  const [budget,setBudget] = useState<string>();
  const [travelMode, setTravelMode] = useState<string>();

  const handleSelectedCountry = (country:Country)=>{
    setSelectedCountry(country)
  }

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

  return (
    <div className="section-layout Createtrip">
      <div className="Createtrip_TopDescription">
        <p className='text-[1.5rem] font-bold'>Tell us your travel preferences 🏕️🌴</p>
        <p className='text-slate-800'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>
      </div>
      <div className="Createtrip_Content">
        <div>
          <strong>What is destination of choice?</strong>
          <Dropdown value={selectedCountry} onChange={(e) => handleSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
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
        <div className='btn-black Createtrip_Button__Btn'>Generate Trip</div>
      </div>
    </div>
  )
}

export default CreatetripPage



 