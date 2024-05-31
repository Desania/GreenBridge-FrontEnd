import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import Index from './components/BootStrap/Index.jsx'
// import ProfileGrower from './components/BootStrap/ProfileGrower.jsx'
// import ListProducts from './components/BootStrap/ListProducts.jsx'
// import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <BrowserRouter> */}
    <App />
    {/* <Index></Index> */}
    {/* <ProfileGrower/> */}
    {/* <ListProducts></ListProducts> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
