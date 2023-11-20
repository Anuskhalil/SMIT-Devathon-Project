import React from 'react'
import ReactTyped from "react-typed";
// import stdOne from '../assets/Images/stdOne.jpeg'
import { FaWhatsapp } from 'react-icons/fa'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import '../App.css'


function Home() {

  return (
    <div id='home'>
      <div className="container py-4">
        <div className="row">
          <div className="col mt-3" >
            <h2 className='fs-1'>Welcome to <span>{" "}</span>
              <ReactTyped className='text-warning' strings={["E-Learning Platform", "Our Community", "you to your learning Journey"]} cursorChar=" !" typeSpeed={100} backSpeed={80} loop />
            </h2>
            <p className='mt-5 fs-5'>Welcome to Your E-Learning Platform, where learning meets innovation. We are passionate about empowering individuals to unlock their full potential through accessible and engaging education. Our platform is designed to provide a dynamic and personalized learning experience for learners of all ages and backgrounds.</p>
            <p className='fs-5'>
              Become a part of a vibrant learning community. Connect with fellow learners, engage in discussions, and collaborate on projects. E-Learning Platform is not just a platform; it's a community dedicated to the pursuit of knowledge and personal growth. Ready to embark on a journey of discovery and growth? Join E-Learning Platform today and take the first step toward a brighter future.</p>
            <div className='icons fs-2 fw-bolder d-flex gap-3 mt-5'>
              <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.whatsapp.com/"><FaWhatsapp /></a>
              <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.facebook.com/profile.php?id=100088560012833"><BiLogoFacebook /></a>
              <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.instagram.com/anuskhalil007/"><BsInstagram /></a>
              <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.linkedin.com/in/anus-khalil-48a397250/"><BsLinkedin /></a>
              <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://github.com/Anuskhalil"><BsGithub /></a>
            </div>
          </div>
          {/* <div className="col-sm-6 col-md-12 col-lg-6 mt-5 py-2">
            <img src={stdOne} width={'100%'} height={'100%'} alt="" />
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default Home
