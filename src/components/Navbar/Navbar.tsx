import './Navbar.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';
import {loginWithGoogle} from "../../services/authservice";
import useUserStore from "../../store/useUserStore";
import type { User } from 'firebase/auth/cordova';



const Navbar = () => {

  const [visible, setVisible] = useState(false);

  let currentUser:User | null;
  currentUser = useUserStore.getState().user

  const handleLogin = async()=>{
      await loginWithGoogle()
      console.log(currentUser);
  }
 
  return (
    <div className="Navbar">
      <div className="logo font-bold text-[1.5rem]">SmarTravel</div>
      {/* <Button className="btn-black" label="Sign Up" onClick={() => setVisible(true)} /> */}
      {currentUser?.photoURL ? (
        <div className="Navbar_UseProfileImg"><img src={currentUser.photoURL} alt="google image" /></div>
        
        
      ) : (
        <Button className="btn-black" label="Sign Up" onClick={() => setVisible(true)} />
      )}
      

      {
        visible ?
      ( 
            <div className='bg-slate-900 w-full h-full z-100 absolute top-0 left-0 opacity-[40%] rounded-lg'>
              <Dialog className="bg-slate-200 max-w-[30rem] max-h-[15rem] h-[10rem] rounded-lg p-[2rem]" visible={visible}  onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className=' h-full flex flex-col items-center justify-center gap-[0.7rem]'>
                    <strong className='text-center font'> Sign In With Google</strong>
                    <p className="m-0 text-center">
                      Sign in to the App with Google authentication securely
                    </p>
                        <button className="btn-black flex gap-[0.5rem]" onClick={handleLogin}>
                          <img className='w-[1.5rem] h-[1.5rem]' src="src/assets/google-svgrepo-com.svg" alt="google-icon" />
                          <p> Login with google</p>
                        </button>
                  </div>
              </Dialog>
            </div>
      ) : null
    }


    </div>
  );
};

export default Navbar;





