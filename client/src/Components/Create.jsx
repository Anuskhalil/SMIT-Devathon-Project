import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaAddressCard } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'
import { BsTelephoneInboundFill } from 'react-icons/bs'
import { SiCoursera } from 'react-icons/si'  

function Create() {

    const form = useRef();
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_2hq36ck',
            'template_qjve0lg',
            form.current,
            'KJdrh5tOlw8_FLo_D')

            .then((result) => {
                console.log(result.text);
                console.log('Message sent')
                toast.success('Please Check your Email! Thank You..')
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const goBack = (e) => {
        e.preventDefault()

        let path = "/dashboard"
        navigate(path)
    }

    return (

        <div id='create'>
            <div className='container p-4 text-dark opacity-75 bg-white rounded' style={{ width: '450px', position: 'relative', top: '4rem' }}>
                <div className="row">
                    <div className="col" >
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputText1" className="form-label fs-5">
                                    <FaUserAlt />  Name:
                                </label>
                                <input
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                    style={{ border: '2px solid black' }}
                                    name='Std_name'
                                    type="text"
                                    className="form-control"
                                    id="exampleInputText1"
                                    aria-describedby="textHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-5">
                                    <MdMarkEmailUnread />  Email Address:
                                </label>
                                <input
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    style={{ border: '2px solid black' }}
                                    name='Std_email'
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputNumber1" className="form-label fs-5">
                                    <BsTelephoneInboundFill />  Phone No:
                                </label>
                                <input
                                    // value={phoneNo}
                                    // onChange={(e) => setPhoneNo(e.target.value)}
                                    style={{ border: '2px solid black' }}
                                    name='Std_phone_No'
                                    type="number"
                                    className="form-control"
                                    id="exampleInputNumber1"
                                    aria-describedby="numberHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputText2" className="form-label fs-5">
                                    <SiCoursera />   Course Name:
                                </label>
                                <input
                                    // value={courseName}
                                    // onChange={(e) => setCourseName(e.target.value)}
                                    style={{ border: '2px solid black' }}
                                    name='Std_courseName'
                                    type="text"
                                    className="form-control"
                                    id="exampleInputText2"
                                    aria-describedby="textHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleAddress" className="form-label fs-5">
                                    <FaAddressCard />  Address
                                </label>
                                <input
                                style={{ border: '2px solid black' }}
                                    // value={address}
                                    // onChange={(e) => setAddress(e.target.value)}
                                    name='Std_address'
                                    type="text"
                                    className="form-control"
                                    id="exampleAddress"
                                    aria-describedby="textHelp"
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-dark mt-3" >
                                Apply
                            </button>
                            <button type="submit" className="btn btn-outline-dark mt-3 ms-3" onClick={goBack}>
                                Back
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Create
