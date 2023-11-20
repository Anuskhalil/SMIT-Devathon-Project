import React from 'react'
import firstPartner from '../assets/Images/first.png'
import secondPartner from '../assets/Images/secpartner.jpg'
import thirdPartner from '../assets/Images/thirdpartner.png'
import fourthPartner from '../assets/Images/fourthpartner.png'
import fifthPartner from '../assets/Images/fifthpartner.jpeg'
import sixthPartner from '../assets/Images/sixthpartner.png'

function ExpPartner() {
    return (
        <div className='container my-5 p-5'>
            <div className="row">
                <h1 className='d-flex justify-content-center mt-5 gap-3'>Our <span style={{ color: '#FDAC4F' }}> <u>Partners</u> </span></h1>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div className="card text-center mb-3 shadow " style={{ width: "18rem" }}>
                        <div className="card-body">
                            <img className='rounded-5 w-100 bg-dark my-3 p-4' src={firstPartner} alt="" />
                            <h5 className="card-title mt-3">The best capital
                                of all is Human.</h5>
                            <p className="card-text">
                                Helping employees reach
                                their full potential.
                            </p>
                            <a href="https://trainery.one/" target='_blank' className="btn" style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F' }}>
                                Know more about
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div className="card text-center mb-3 shadow " style={{ width: "18rem" }}>
                        <div className="card-body">
                            <img className='rounded-5' style={{ height: '120px' }} src={secondPartner} alt="" />
                            <h5 className="card-title mt-3">Create and Educational Edifice </h5>
                            <p className="card-text">
                                We at FAST, with most meritorious faculties, excellent notes
                            </p>
                            <a href="https://www.fast.edu.in/" target='_blank' className="btn" style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F' }}>
                                Know more about
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div className="card text-center mb-3 shadow " style={{ width: "18rem" }}>
                        <div className="card-body">
                            <img className='rounded-5' style={{ height: '120px' }} src={thirdPartner} alt="" />
                            <h5 className="card-title mt-3">flexible framework for education.</h5>
                            <p className="card-text">
                                We work with schools worldwide to build an education.
                            </p>
                            <a href="https://www.cambridgeinternational.org/" target='_blank' className="btn" style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F' }}>
                                Know more about
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div className="card text-center mb-3 shadow " style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <img className='rounded-5' style={{ height: '120px' }} src={fourthPartner} alt="" />
                                    <h5 className="card-title mt-3">Provide tremendous Edu and Environment.</h5>
                                    <p className="card-text">
                                        Empowered LXP is a learning experience platform that empowers organizations and individuals.
                                    </p>
                                    <a href="https://gogetempowered.com/" target='_blank' className="btn" style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F' }}>
                                        Know more about
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div className="card text-center mb-3 shadow " style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <img className='rounded-5' style={{ height: '120px' }} src={fifthPartner} alt="" />
                                    <h5 className="card-title mt-3">Ready for the adventure of a lifetime</h5>
                                    <p className="card-text">
                                        EduCanada.ca is the official Government of Canada for international students.
                                    </p>
                                    <a href="https://www.educanada.ca/menu.aspx?lang=eng" target='_blank' className="btn" style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F' }}>
                                        Know more about
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div className="card text-center mb-3 shadow " style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <img className='rounded-5' style={{ height: '120px' }} src={sixthPartner} alt="" />
                                    <h5 className="card-title mt-3">
                                        Success is for 3G E-LEARNING</h5>
                                    <p className="card-text">
                                        3G E-learning LLC is a leading independent publisher specializing in developing collections of titles.
                                    </p>
                                    <a href="https://www.3ge-learning.com/" target='_blank' className="btn" style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F' }}>
                                        Know more about
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExpPartner
