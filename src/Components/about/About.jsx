
import React from 'react'
import aboutStyle from "./about.module.css"

export default function About() {
  return (
    <>



    <div className={`${aboutStyle.about_bg} d-flex justify-content-center align-items-center vh-100`}>
      <div className={`${aboutStyle.about_width}  mx-auto `}>
        <div className="row">
        <h1 className={`text-uppercase text-white text-center ${aboutStyle.homeH} mt-5`}>ABOUT</h1>

        <div className='d-flex justify-content-center align-items-center my-4'>
        <div className={`${aboutStyle.line} text-white`}></div>
        <li className={`${aboutStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
           <div className={`${aboutStyle.line}`}></div>
      </div>     
          <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
