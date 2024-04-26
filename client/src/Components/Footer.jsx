import React from 'react'
import { FaBlenderPhone } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { FaWhatsapp } from 'react-icons/fa'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { BsArrowUpSquareFill } from "react-icons/bs";
import flogo from '../assets/Images/icon.jpg'
import ReactTyped from "react-typed";
import '../App.css'

function Footer() {
    return (
        <>
            <div className="container mt-5" style={{position:'relative', top:'30px'}}>
                <div className="row">
                    <div className="col bg-dark text-white rounded mt-4 py-2">
                        <h1>Get <span>{" "}</span>
                         <ReactTyped className='text-warning' strings={["more Info here", "Exploring more here"]} cursorChar=" !" typeSpeed={100} backSpeed={80} loop />
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{backgroundColor: '#FDAC4F'}}>
                <div className="row">
                    <div className="col py-5 mt-5">
                        <h1><img className='rounded-4' width={'150px'} src={flogo} alt="" /></h1>
                        <h5><FaBlenderPhone /> 0321-2173134</h5>
                        <h5><FaAddressBook /> Business Lab Flat 02, Main Shahrah-e-Faisal Road near by HBL Bank.</h5>
                    </div>
                    <div className="col py-5 mt-5">
                        <h3>ABOUT EXTENSIONS</h3>
                        <h6><a style={{color:'black', textDecoration:'none'}} href="#">About</a></h6>
                        <h6><a style={{color:'black', textDecoration:'none'}} href="#">Leaderships</a></h6>
                        <h6><a style={{color:'black', textDecoration:'none'}} href="#">Carrers</a></h6>
                        <h6><a style={{color:'black', textDecoration:'none'}} href="#">Extensions News</a></h6>
                        <h6><a style={{color:'black', textDecoration:'none'}} href="#">Press</a></h6>
                        <h6><a style={{color:'black', textDecoration:'none'}} href="#">Country Offices</a></h6>
                    </div>
                    <div className="col py-5 mt-5">
                        <h3>OTHER PROGRAMS</h3>
                        <h6>Better Kid Care</h6>
                        <h6>Master Gardener</h6>
                    </div>
                    <div className='col icons fs-3 gap-3'>
                        <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.whatsapp.com/"><FaWhatsapp /></a>
                        <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.facebook.com/profile.php?id=100088560012833"><BiLogoFacebook /></a>
                        <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.instagram.com/anuskhalil007/"><BsInstagram /></a>
                        <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://www.linkedin.com/in/anus-khalil-48a397250/"><BsLinkedin /></a>
                        <a style={{ borderRadius: '50% 40%', padding: '8px 14px' }} target='_blank' href="https://github.com/Anuskhalil"><BsGithub /></a>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center text-align-center" style={{backgroundColor: '#FDAC4F'}}>
                        <p className='fs-5'>2023 Pakistan's E-Learning Platform</p>
                        <a className='fs-1 fw-bolder' href="#pronav"><BsArrowUpSquareFill /></a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer
