import React from 'react'

import { NavLink } from 'react-router-dom'
import logo from './../images/Urdu_nama_logo.png'
import Android from './../images/Android.png'
import Apple from './../images/apple.jpg'
import mobile from './../images/phone.webp'

function Home() {
  return (
    <div className='home_content page_content'>
      <div className='home-content'>
        <div className='home-nav-content'>
          <div className='logo-content'>
            <h3>URDU NAAMA</h3>
          </div>
          <div className='nav-tabs'>
            <NavLink to='/read'><p>Read now</p></NavLink>
            <NavLink to='/blog'><p>Blog</p></NavLink>
          </div>
        </div>
        <div className='home-banner-content'>
          <div className='banner-left'>
              <img className='phone-screen' src={mobile} />
          </div>
          <div className='banner-right'>
              <h1>Stay informed in 60 words,</h1>
              <p>We understand you don’t have time to go through long news articles everyday. So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile generation.</p>
              <img className='download_btn' src={Android} />
              <img className='download_btn' src={Apple}/>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Home