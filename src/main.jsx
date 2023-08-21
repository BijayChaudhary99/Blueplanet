import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx';
import Topbar from './Components/Navbar/topbar';
import ErrorPage from "./error-page";
import HeroSlider from './Components/Intro/HeroSlider.jsx';
import Canada from './Components/Immigrate/Canada.jsx';
import French from './Components/French Legion/French.jsx';
import Australia from './Components/Immigrate/Australia.jsx';
import Unitedstates from './Components/Immigrate/Unitedstates.jsx';
import Unitedkingdom from './Components/Immigrate/Unitedkingdom.jsx';
import Schengen from './Components/Immigrate/Schengen.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:(
        <App/>
    ),
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/france",
        element: <French/>,
      },
      {
        path: "/canada",
        element: <Canada/>,
      },
      {
        path: "/australia",
        element: <Australia/>,
      },
      {
        path: "/unitedstates",
        element: <Unitedstates/>
      },
      {
        path: "/unitedkingdom",
        element: <Unitedkingdom/>
      },
      {
        path: "/schengen",
        element: <Schengen/>
      }
      
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
