import { useNavigate } from 'react-router';
import './Hero.css';

const Hero = () => {

const navigate = useNavigate();


  return (
    <div className="Hero">
      <p className='uppercase font-bold text-[40px] text-[var(--color1)] max-w-[80%]'>
        Discover Your Next Adventure with AI:
      <br/>

        <span className='text-black text-center  max-w-[80%]'> Personalized Itineraries at Your
        Fingertips
        </span>
      </p>
      <p className='text-[1.1rem] text-slate-700  max-w-[80%]'>
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <div className="btn-black" onClick={()=>{navigate('/create-trip')}}>Get Started, It's Free</div>
    </div>
  );
};

export default Hero;
