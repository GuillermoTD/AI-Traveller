// src/routes.ts
import { createBrowserRouter } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
