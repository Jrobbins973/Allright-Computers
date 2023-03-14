import React from 'react'
import { useHistory } from "react-router-dom";
import Services from './Services';
import Footer from './Footer';



function Home() {
    const history = useHistory()




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

            <a className=' hover:text-blue-500 underline underline-offset-4 transition duration-200 cursor-pointer'>Contact</a>
        </div>

    

        <Footer />

    </div>
    )
}

export default Home