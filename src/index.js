import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/Pages/Home'
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Projects',
    element: <Projects />
  },
  {
    path: '/About-Me',
    element: <AboutMe />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

