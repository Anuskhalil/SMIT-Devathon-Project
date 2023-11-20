import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'

import Form from 'react-bootstrap/Form';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2hq36ck',
      'template_qjve0lg',
      form.current,
      'uxEuhn2BYFGjJRZCK')

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
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label className='fs-5 fw-bold'>Name:</Form.Label>
                <Form.Control name='Std_name' type="text" placeholder="Example@Anus" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5 fw-bold'>Email:</Form.Label>
                <Form.Control name='Std_email' type="email" placeholder="Example@gmail.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className='fs-5 fw-bold'>Phone No:</Form.Label>
                <Form.Control name='Std_phone_No' type="number" placeholder="03-" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCourse">
                <Form.Label className='fs-5 fw-bold'>Course:</Form.Label>
                <Form.Control  name='Std_courseName' type="text" placeholder="Example@Chemistry" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='fs-5 fw-bold'>Write your thoughts:</Form.Label>
                <Form.Control name='Std_text' placeholder='Write here...' as="textarea" rows={3} />
              </Form.Group>
              <button type="submit" className="btn btn-outline-dark mt-3 my-3" >
                Submit it
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact

