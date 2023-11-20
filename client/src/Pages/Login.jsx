import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { MdAttachEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { LuMoveUpRight } from 'react-icons/lu'
import '../App.css'

function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const userLogin = async (e) => {
    e.preventDefault();

    const { email, password } = data
    try {
      const { data } = await axios.post('/login', {
        email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login successful. Welcome!')
        navigate('/dashboard')
      }
    } catch (error) {
      // console.log('error', error)
    }

  }


  return (
    <div id='login'>
      <div className='container text-dark opacity-75 bg-white p-5 rounded' style={{ width: '450px', position: 'relative', top: '9rem' }}>
        <div className="row">
          <div className="col" >
            <form onSubmit={userLogin} >
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-5">
                  <MdAttachEmail />  Email address
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
              <button type="submit" className="btn btn-outline-dark fs-5">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <h4 className='d-flex justify-content-center align-items-center text-align-center text-white' style={{ position: 'relative', top: '150px' }}>Don't have an account
      <Link className='text-decoration-none p-2 m-1 rounded' style={{color:'#FDAC4F'}} to='/register'>SignUp<LuMoveUpRight /></Link>
      </h4>
    </div>
  )
}

export default Login
