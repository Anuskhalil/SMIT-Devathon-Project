import React from 'react'
import { LuMoveRight } from 'react-icons/lu'
import { FaUserCircle } from 'react-icons/fa'
import { RiTyphoonLine } from 'react-icons/ri'
import { GiArchiveRegister } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Modern() {
    return (
        <div className='container d-flex g-0' id='modern'>
            <div className="row mt-5 py-5 m-2">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3 className='fs-3 mt-3'>Modern art for anyone</h3>
                    <p style={{ fontSize: '17px' }} className='mt-4 opacity-50 fw-medium'>An investment in knowledge pays the best interest grow your creative Entrepreneurship.</p>
                    <div className="anchor mt-5 fs-5 fw-bolder " style={{ color: '#6C75DE' }}>
                        <Link className='text-decoration-none' to='/explorepartner'>Explore partners<LuMoveRight /></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 rounded py-4" style={{backgroundColor: '#FDAC4F'}}>
                    <FaUserCircle className='mb-4' style={{ fontSize: '80px' }} />
                    <h3 className='mb-4'>Expert Teachers</h3>
                    <p className='fw-medium fs-5'>Connecting people who want to learn with great teachers</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 py-4">
                    <RiTyphoonLine className='mb-4' style={{ fontSize: '80px' }} />
                    <h3 className='mb-4'>Online Courses</h3>
                    <p className='fw-medium opacity-50 fs-5 fw-medium'>Connecting people who want to learn with great teachers</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 py-4">
                    <GiArchiveRegister className='mb-4' style={{ fontSize: '80px' }} />
                    <h3 className='mb-4'>Easy Registration</h3>
                    <p className='fw-medium opacity-50 fs-5 fw-medium'>Connecting people who want to learn with great teachers</p>
                </div>
            </div>
        </div>
    )
}

export default Modern
