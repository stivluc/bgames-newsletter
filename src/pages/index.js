import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <FirstSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo} />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
