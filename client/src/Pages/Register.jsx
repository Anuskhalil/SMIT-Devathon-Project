import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { FaUserTie } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdAttachEmail } from 'react-icons/md'
import '../App.css'

function Register() {

  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const userRegister = async (e) => {
    e.preventDefault()
    const { name, email, password } = data
    try {
      const { data } = await axios.post('/register', {
        name, email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div id='register'>
      <div className='container bg-white opacity-75 p-5 text-dark rounded' style={{ width: '450px', position: 'relative', top: '9rem' }}>
        <div className='row'>
          <div className="col">
            <form onSubmit={userRegister} >
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label fs-5">
                  <FaUserTie /> Username
                </label>
                <input
                  style={{ border: '2px solid black' }}
                  type="text"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                />
              </div>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-5">
                  <MdAttachEmail /> Email address
                </label>
                <input
                  style={{ border: '2px solid black' }}
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              {/* Password */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fs-5">
                  <RiLockPasswordFill /> Password
                </label>
                <input
                  style={{ border: '2px solid black' }}
                  type="password"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-outline-dark">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
