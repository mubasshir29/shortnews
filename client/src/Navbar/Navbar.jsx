import React from 'react'
import './Navbar.css'
import logo from './../../src/images/Urdu_nama_logo.png'

function Navbar() {
  return (
    <div className='navbar_content'>
        <div className='navbar'>
          <i className="bi bi-list menu_btn"></i>
          <p className='logo'><img src={logo} /></p>
          <i className="bi bi-person-circle"></i>
        </div>
    </div>
  )
}

export default Navbar