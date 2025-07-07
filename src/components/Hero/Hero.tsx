import './Hero.css';
import { useNavigate } from 'react-router';

const Hero = () => {

  const navigate = useNavigate();
  return (
    <div className="Hero">
      <p>
        Discover Your Next Adventure with AI: Personalized Itineraries at Your
        Fingertips
      </p>
      <p>
        Your personal trip planner and travel curator, creating customitineraries tailored to your interests and budget.
      </p>
      <div className="btn-black" onClick={()=> navigate('/create-trip')}>Get Started, It's Free</div>
    </div>
  );
};

export default Hero;
