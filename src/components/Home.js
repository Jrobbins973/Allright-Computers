import React from 'react'
import { useHistory } from "react-router-dom";
import Services from './Services';
import Footer from './Footer';



function Home() {
    const history = useHistory()

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };




    return (
    <div className="about-me-background h-screen cursor-default"> 

    <div  className='flex items-center justify-center' >
        <img className='rounded-full w-96 shadow-lg shadow-black' src='https://i.imgur.com/SxCU1MY.png' />
    </div>
        {/* <div className='flex flex-row justify-center'>
            <h1 className="text-xl font-bold md:text-2xl">
            Allright Computer Services
            </h1>
        </div> */}

            <div className='flex justify-center mt-10 text-white text-3xl font-bold font-mono '>
            <h1>Computer Repair Expert</h1>
            </div>

        <div className=' flex flex-row justify-center font-bold text-white text-xl font-mono mt-8 '>


            <a className=' hover:text-blue-500 underline underline-offset-4 transition duration-200 cursor-pointer ' onClick={() => history.push('/about')}>About</a>

            <a className=' mx-5 hover:text-blue-500 underline underline-offset-4 transition duration-200 cursor-pointer'
            onClick={() => history.push('/services')}
            >Services</a>

            <p onClick={() => openInNewTab("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=drobbins56@gmail.com")} className=' hover:text-blue-500 underline underline-offset-4 transition duration-200 cursor-pointer'>Contact</p>
        </div>

    

        <Footer />

    </div>
    )
}

export default Home