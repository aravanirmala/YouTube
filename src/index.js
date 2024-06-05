import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import MainContainer from './mainContainer';
import Vid from './next';
import {createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom';


const App=()=>{
  return<div className='app'>
    <Navbar/>
    {/* <MainContainer/> */}
    <Outlet/>
  </div>
}

const ways=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<MainContainer/> 
      },
      {
        path:"/video/:id",
        element:<Vid/>
      }
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);

