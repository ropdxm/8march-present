import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

type NavbarProps = {
  title: String
}
const Navbar = ({ title }: NavbarProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <nav className='nav'>
      <ul>
        <li className='logo'><Link to="/"><img src={require('../media/logo.png')} /></Link></li>
        <li className='title' style={{fontSize: title==="8 March is the best Mereke" && width<768 ? "2.8rem" : "3.7rem"}}>{title}</li>
      </ul>
    </nav>
  )
}

export default Navbar;