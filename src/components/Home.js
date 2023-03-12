import React from 'react'
import { useHistory } from "react-router-dom";
import Services from './Services';




function Home() {
    const history = useHistory()




    return (
    <div > 
        <div className='flex flex-row items-center ml-16'>
            <h1 className="text-xl font-bold md:text-2xl">
            Allright Computer Services
            </h1>
        </div>

        <div className='container flex flex-row items-center font-bold ml-16'>
            <a className='mx-5 hover:text-blue-500 transition duration-200' onClick={() => history.push('/about')}>About</a>
            <a className='mx-5 hover:text-blue-500 transition duration-200'>Services</a>
            <a className='mx-5 hover:text-blue-500 transition duration-200'>Contact</a>
        </div>

        <Services />


    </div>
    )
}

export default Home