
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Index from './components/BootStrap/Index.jsx'
// import navv from './components/BootStrap/Navv.jsx'
import DashCustomer from './components/BootStrap/DashCustomer.jsx'
import DashGrower from './components/BootStrap/DashGrower.jsx'
import ProfileGrower from './components/BootStrap/ProfileGrower.jsx'
import ListProduct from "./components/BootStrap/ListProducts.jsx"
import ViewListProducts from './components/BootStrap/ViewListProducts.jsx'
import GrowerFinder from './components/BootStrap/GrowerFinder.jsx'
import ProfileCustomer from './components/BootStrap/ProfileCustomer.jsx'
import DashAdmin from './components/BootStrap/DashAdmin.jsx'
import UserManager from './components/BootStrap/UserManager.jsx'
import ManageGrower from './components/BootStrap/ManageGrower.jsx'
import ManageCustomer from './components/BootStrap/ManageCustomer.jsx'
import SpinnerComponent from './components/BootStrap/SpinnerComponent.jsx';


const router=createBrowserRouter(
 [
  {
    path:"/",
    element:<Index></Index>
  },
  {
    path:"/dashgrower/:eid",
    element:<DashGrower></DashGrower>
  },
  {
    path:"/dashcustomer/:eid",
    element:<DashCustomer></DashCustomer>
  },
  {
    path:"/profilegrower/:eid",
    element:<ProfileGrower></ProfileGrower>
  },
  {
    path:"/listproducts/:eid",
    element:<ListProduct></ListProduct>
  },
  {
    path:"/viewlistproducts/:eid",
    element:<ViewListProducts></ViewListProducts>
  },
  {
    path:"/openlistprod/:id",
    element:<ListProduct></ListProduct>
  },
  {
    path:"/growerfinder/:eid",
    element:<GrowerFinder></GrowerFinder>
  },
  {
    path:"/customerprofile/:eid",
    element:<ProfileCustomer></ProfileCustomer>
  },
  {
    path:"/dashadmin/:eid",
    element:<DashAdmin></DashAdmin>
  },
  {
    path:"/usermanager/:eid",
    element:<UserManager></UserManager>
  },
  {
    path:"/growerInfo/:eid",
    element:<ManageGrower></ManageGrower>
  },
  {
    path:"/customerInfo/:eid",
    element:<ManageCustomer></ManageCustomer>
  }

 ]
)
function App()
 {
  return (
    <>
     <RouterProvider  router={router}/>

    </>
  )
}

export default App
