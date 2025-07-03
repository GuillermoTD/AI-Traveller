import './Navbar.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';

const Navbar = () => {

  const [visible, setVisible] = useState(false);


  return (
    <div className="Navbar">
      <div className="logo font-bold text-[1.5rem]">SmarTravel</div>
      <Button className="btn-black" label="Sign Up" icon="pi pi-external-link" onClick={() => setVisible(true)} />
      {
        visible ?
      (   <div className='bg-slate-900 w-full h-full z-100 absolute top-0 left-0 opacity-[40%]'>
      <Dialog className="bg-slate-200 max-w-[40rem] w-[20rem]" header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>

          </div>) : null
    }


    </div>
  );
};

export default Navbar;





