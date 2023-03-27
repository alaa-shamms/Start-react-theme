import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import NavbarStyle from "./Navbar.module.css"

export default function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg fixed-top">
  <div className="container w-75 py-1">
    <Link className={`${NavbarStyle.navBrand} navbar-brand`}  to="">Start React</Link>
    <button className={`${NavbarStyle.nav_mediaQ} navbar-toggler pt-2  `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='text-white'>MENU</span> <i className={`fa-solid fa-bars ${NavbarStyle.bars} ms-2 text-white`}></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3 d-flex align-items-center">

        <li className="nav-item">
          <NavLink className={  ({isActive})=>isActive==true?`nav-link ${NavbarStyle.linkStyle} ${NavbarStyle.active}`:`nav-link ${NavbarStyle.linkStyle}`} to="Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={ ({isActive})=>isActive==true?`nav-link ${NavbarStyle.linkStyle} ${NavbarStyle.active}`:`nav-link ${NavbarStyle.linkStyle}`} to="about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={ ({isActive})=>isActive==true?`nav-link ${NavbarStyle.linkStyle} ${NavbarStyle.active}`:`nav-link ${NavbarStyle.linkStyle}`} to="CONTACT">CONTACT</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>

    </>
  )
}
