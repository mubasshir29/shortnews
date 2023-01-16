import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='home_content page_content'>
        <NavLink to='/read'><p>Read now</p></NavLink>
    </div>
  )
}

export default Home