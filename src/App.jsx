

import React, { Component } from 'react'
import About from './Components/about/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import ErrorPage from './Components/errorPage/ErrorPage'
import Home from './Components/home/Home'
import Parent from './Components/parent/Parent'
import CONTACT from './Components/contact/Contact'








let routes=createBrowserRouter( [

  {path:"/",element:<Layout/>,children:[

  {index:true,element:<Home/>},
  {path:"Portfolio",element:<Parent/>},
  {path:"about",element:<About/>},
  {path:"CONTACT",element:<CONTACT/>},

  {path:'*',element:<ErrorPage/>}


  ]}




] )




export default class App extends Component {
  render() {

      
    return <RouterProvider router={routes}/>

    
  }
}
