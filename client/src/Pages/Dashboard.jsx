import { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import { SiWelcometothejungle } from 'react-icons/si'
import Hero from '../Components/Hero'
import Modern from '../Components/Modern'
import Contact from '../Components/Contact'
import ExpTeachers from '../Pages/ExpTeachers'
import Footer from '../Components/Footer'


export default function Dashboard() {

    const { user } = useContext(UserContext)

    return (
        <div className="main">
            <div className='d-flex justify-content-between p-2 m-3 text-black rounded' style={{ backgroundColor: '#FDAC4F' }}>
                <h3 className='mt-2'>E-Learning  </h3>
                <div className='dash p-2'>
                    {!!user && (<h5><SiWelcometothejungle />elcome: {user.name}</h5>)}
                </div>
            </div>
            <Hero />
            <Modern />
            <ExpTeachers />
            <Contact />
            <Footer />
        </div>
    )
}

