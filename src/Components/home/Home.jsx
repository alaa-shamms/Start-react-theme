import React from 'react'

import homeImg from "../assets/avataaars.svg"

import homeStyle from "./home.module.css"



export default function Home() {
  return (
 
<div className={`${homeStyle.home} d-flex justify-content-center align-items-center vh-100 flex-column`}>
  <img src={homeImg} className={`${homeStyle.homeImg}`} alt="" />
  <h1 className={`text-uppercase text-white ${homeStyle.homeH} mt-3 `}>start react</h1>
  <div className='d-flex justify-content-center align-items-center mt-3'>
    <div className={`${homeStyle.line} text-white`}></div>
    <li className='fa fa-star fa-2x text-white mx-4'></li>
    <div className={`${homeStyle.line}`}></div>
  </div>
  <p className='text-white my-3 fs-4'>

Graphic Artist - Web Designer - Illustrator</p>
</div>


  )
}
