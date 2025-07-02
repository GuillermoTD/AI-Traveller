// src/routes.ts
import { Outlet, createBrowserRouter } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './layouts/MainLayout';


export const router = createBrowserRouter([
  {
    path: '/',            // Ruta base con MainLayout
    element: <MainLayout />,
    children: [
      {
        index: true,      // Esta ruta es la "default" en "/"
        element: <HomePage />,
      },
    ]
  },
]);
