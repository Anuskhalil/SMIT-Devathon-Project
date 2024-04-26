import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { FaUserAlt, FaAddressCard } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'
import { BsTelephoneInboundFill } from 'react-icons/bs'
import { SiCoursera } from 'react-icons/si'

function Contact() {

  const form = useRef();

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

  return (

    <div className='color py-4 mt-5' style={{ backgroundColor: '#FDAC4F' }}>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex flex-column justify-content-center align-items-center mt-5'>
            <h1>Contact Us</h1>
            <p>Fill out the form below we'll get back to you shortly.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
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
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5 ">
                  Write your thoughts
                </label>
                <textarea
                style={{ border: '2px solid black' }}
                name='Std_text'
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-outline-dark mt-3 px-4" >
                Apply Here
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
    // <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //   <Form.Label className='fs-5 fw-bold'>Write your thoughts:</Form.Label>
    //   <Form.Control name='Std_text' placeholder='Write here...' as="textarea" rows={3} />
    // </Form.Group>
  )
}

export default Contact

