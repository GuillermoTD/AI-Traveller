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


  // const selectedCountryTemplate = (option: Country, props) => {
  //     if (option) {
  //         return (
  //             <div className="flex align-items-center">
  //                 <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
  //                 <div>{option.name}</div>
  //             </div>
  //         );
  //     }

  //     return <span>{props.placeholder}</span>;
  // };

  // const countryOptionTemplate = (option: Country) => {
  //     return (
  //         <div className="flex align-items-center">
  //             <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
  //             <div>{option.name}</div>
  //         </div>
  //     );
  // };


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
          <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
            className="w-[100%] md:w-14rem" />
        </div>

        <div className='flex flex-col'>
          <strong>How many days are you planning your trip?</strong>
          <InputNumber  min={0} value={value} showButtons />
        </div>


        <div className='w-full'>
          <strong>What is Your Budget?</strong>
          <div className='flex gap-[1rem] justify-between flex flex-wrap md:flex-nowrap'>
            <CardOption>
              <p className='icon'>💵</p>
              <strong>Cheap</strong>
              <p>Stay conscious of costs</p>
            </CardOption>
            <CardOption>
              <p className='icon'>💰</p>
              <strong>Moderate</strong>
              <p>Keep cost on the average side</p>
            </CardOption>
            <CardOption>
              <p className='icon'>💸</p>
              <strong>Luxury</strong>
              <p>Dont worry about cost</p>
            </CardOption>
          </div>
        </div>
    
        <div className='w-full'>
          <strong>Who do you plan on traveling with on your next adventure?</strong>
          <div className='flex gap-[1rem] justify-between flex flex-wrap md:flex-nowrap'>
            <CardOption>
              <p className='icon'> ✈️</p>
              <strong>Just Me</strong>
              <p>A sole traveles in exploration</p>
            </CardOption>
            <CardOption>
              <p className='icon'>🥂</p>
              <strong>A Couple</strong>
              <p>Two traveles in tandem</p>
            </CardOption>
            <CardOption>
              <p className='icon'> 🏡</p>
              <strong>Family</strong>
              <p>A group of fun loving adv</p>
            </CardOption>
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



 