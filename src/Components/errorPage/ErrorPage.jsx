import React from 'react'
import errorImg from "../assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif"
import errorStyle from "./error.module.css"

export default function ErrorPage() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={errorImg} className={`${errorStyle.errorDesign}`} alt="" />
    </div>
  )
}
