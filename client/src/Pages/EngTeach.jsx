import React from 'react'
import engimg from '../assets/Images/one.jpeg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EngTeach() {

    const navigate = useNavigate()
    const [buttonText, setButtonText] = useState("Connect");

    const changeText = (text) => {
        setButtonText(text);
        setTimeout(() => setButtonText('Connect'), [5000])
    }

    const dash = () => {
        const path = '/dashboard'
        navigate(path)
    } 

    return (
        <div className='container mt-2 py-1 rounded-5 fs-5' style={{ backgroundColor: '#FDAC4F'}}>
            <div className="row m-2">
                <div id='oneInfo' className="col-sm-12 col-md-6 col-lg-3 text-black mt-5 py-5">
                    <img className='rounded-5 ' src={engimg} alt="" />
                    <h4 className='ms-4'>Abigail Emma</h4>
                    <h4>English Expert</h4>
                    <p>5 Years teaching experience</p>
                    <h5>Teaching at Szebik University (Regular)</h5>
                    <button className='btn btn-outline-dark mt-3 my-3 m-1' onClick={() => changeText('Connected')}>{buttonText}</button>
                    <button className='btn btn-outline-dark mt-3 my-3' onClick={dash}>Back</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 text-black mt-5 py-3" style={{ position: 'relative', top: '50px', right: '1%' }}>
                    <p>Are you looking for an English teacher for your English learning Journey? If Yes! then I am here to teach you with having great experienced in this field. So, let’s hit the connect button and Join and learn from me.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 text-black mt-5 py-3">
                    <h3>Education</h3>
                    <h5>University of Kingdom</h5>
                    <p>Bachelor's Degree in English with Teacher Certification: (2013, 16)</p>
                    <h5>University of Lowrence</h5>
                    <p>Master's Degree in English Literature. (2016, 18)</p>
                    <p>Having deep understanding of English language and literature, including grammar, syntax, phonetics, and literary analysis.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 text-black mt-5 py-3">
                    <h3>Date and Time</h3>
                    <p>Available for two days:</p>
                    <p>Days: Monday and Thursday</p>
                    <p>
                        Timing: 12:00 PM to 3:00 PM
                    </p>
                    <h3>Price</h3>
                    <p>Free for first time comer</p>
                    <p>Next: 150$ per course for 2 months.</p>
                </div>

            </div>
        </div>

    )
}

export default EngTeach
