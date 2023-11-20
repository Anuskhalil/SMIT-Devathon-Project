import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { UserContextProvider } from '../Context/userContext'
import Dashboard from './Pages/Dashboard'
import AppVideo from './Pages/AppVideo'
import Create from './Components/Create'
import ExpPartner from './Pages/ExpPartner'
import EngTeach from './Pages/EngTeach'
import MathTeach from './Pages/MathTeach'


function App() {
  axios.defaults.baseURL = 'http://localhost:3000/api';
  axios.defaults.withCredentials = true

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/demovideo' element={<AppVideo />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/explorepartner' element={<ExpPartner />}></Route>
        <Route path='/englishteach' element={<EngTeach />}></Route>
        <Route path='/mathteach' element={<MathTeach />}></Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
