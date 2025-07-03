// src/routes.ts
import {  createBrowserRouter } from 'react-router';
// import MainPage from './pages/MainPage/MainPage';
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './layouts/MainLayout';
import CreatetripPage from './pages/CreatetripPage/CreatetripPage';

export const router = createBrowserRouter([
  {
    path: '/',            // Ruta base con MainLayout
    element: <MainLayout />,
    children: [
      {
        index: true,      // Esta ruta es la "default" en "/"
        element: <HomePage />,
      },
      {
        path:"/create-trip",
        element: <CreatetripPage />,
      },
    ]
  },
]);
