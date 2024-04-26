import React, { useState } from 'react'
import { MdOutlineRoundaboutRight } from 'react-icons/md'
import { LuMoveUpRight } from 'react-icons/lu'
import heroImg from '../assets/Images/learn.jpg'
import { useNavigate } from 'react-router-dom'

function Hero() {

    let navigate = useNavigate()

    const demoVideo = () => {
        let path = "/demovideo"
        navigate(path)
    }
    const createBtn = () => {
        let path = "/create"
        navigate(path)
    }
    


    return (
        <div className='container' id='hero_video'>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <h5 className='p-1 rounded mt-5 px-2' style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F', width: '150px' }}>Welcome Back</h5>
                    <h1 className='help mt-5 fw-bolder' style={{ fontSize: '57px' }}> <MdOutlineRoundaboutRight />Helping you learn <br /> about the world.</h1>
                    <p className='fw-semibold mt-4' style={{opacity:'.6', fontSize:'17px'}}>We bring students and teachers together to create a more <br /> personalized learning experience and foster.</p>
                    <button onClick={demoVideo} type='submit' className='py-2 border-0 rounded' style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F', width: '150px' }}>Watch a Demo<LuMoveUpRight /></button>
                    <button onClick={createBtn} className='btn btn-outline-dark text-black py-2 rounded bg-transparent m-3 mt-3' type='submit'>Apply Here<LuMoveUpRight /></button>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                    <img className='rounded-4' style={{opacity:'.7'}} src={heroImg} alt="" width={'100%'} />
                </div>
            </div>

        </div>
    )
}

export default Hero
