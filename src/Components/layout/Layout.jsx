import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/FooterOfpage'
import {Outlet} from "react-router-dom"


export default function Layout() {
  return (
    <>
    
    <Navbar/>

        <Outlet></Outlet>

    <Footer/>    
    </>
  )
}
