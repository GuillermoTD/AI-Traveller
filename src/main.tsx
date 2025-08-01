import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router';
import {router} from "./router.tsx"
import "primereact/resources/primereact.min.css"; // estilos base de PrimeReact
import "primeicons/primeicons.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
