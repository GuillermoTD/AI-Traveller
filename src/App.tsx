import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainLayout from './layouts/MainLayout';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <MainLayout Children={<Outlet/>}/>
    </>
  );
}

export default App;
