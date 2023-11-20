import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LuMoveUpRight } from 'react-icons/lu'
import iconImg from '../assets/Images/icon.jpg'

function Navbar() {

  return (
    <>

      <div id='pronav' className='d-flex justify-content-between align-items-center text-align-center p-2' style={{ backgroundColor: 'ActiveBorder' }}>
        <nav className='d-flex align-items-center gap-2 '>
          <img className='rounded-5 opacity-75' src={iconImg} alt="" width={'50px'} />
          <a className='text-decoration-none text-white' href="#modern">AboutUs</a>
          <a className='text-decoration-none text-white' href="#contact">Contact</a>
          <a className='text-white text-decoration-none rounded' href='#expteacher'>ExpertTeachers</a>
        </nav>
        <nav>
          <Link className='text-black text-decoration-none p-2 me-3 rounded' style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F' }} to='/login'>Login<LuMoveUpRight /></Link>
        </nav>
      </div>
    </>

  )
}

export default Navbar
