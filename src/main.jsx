import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router'
import { RouterProvider } from "react-router/dom";
import Contexts from './Contexts/Contexts';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Contexts><RouterProvider router={router}/></Contexts>
       <ToastContainer position="top-center" style={{ zIndex: 9999 }} />
  </StrictMode>,
)
