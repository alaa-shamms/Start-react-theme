import React from 'react'
import contactStyle from './contact.module.css'

export default function Contact() {



  return (

        <>
    
  
            <div className='vh-100  d-flex justify-content-center align-items-center flex-column w-75 mx-auto'>


<br />
<br />
            <h1 className={`text-uppercase  text-center ${contactStyle.homeH} mt-5`}>CONTACT ME</h1>

                <div className='d-flex justify-content-center align-items-center my-4'>
                <div className={`${contactStyle.line} text-white`}></div>
                <li className={`${contactStyle.starColor} fa fa-star fa-2x  mx-4`}></li>
                <div className={`${contactStyle.line}`}></div>
                </div>   

                        <input type="text" placeholder='Name'id='NameInput' className='form-control fs-4 my-2 ' />
                        <p className='text-danger d-none' id='NameAlert'>Please enter your name.</p>
                        <input type="email" placeholder='Email Address'  className='form-control fs-4 my-2' />
                        <input type="number" placeholder='Phone Number'  className='form-control fs-4 my-2' />
                        <textarea placeholder='Message' name="w3review" rows="4" cols="50"  className='form-control  fs-4 my-2'>
                        </textarea>

                        <button className={`btn ${contactStyle.sendstyle} my-3`}>Send</button>

            </div>

 
        

        
        </>


    )
}
