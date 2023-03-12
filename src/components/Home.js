import React from 'react'
import { useHistory } from "react-router-dom";
function Home() {
    const history = useHistory()




    return (
    <div> 
        <h1 className="text-xl font-bold md:text-2xl items-center">
        Allright Computer Services
        </h1>

        <div className='container flex flex-row items-center font-bold'>
            <a className='mx-5 hover:text-blue-500 transition duration-200' onClick={() => history.push('/about')}>About</a>
            <a className='mx-5 hover:text-blue-500 transition duration-200'>Services</a>
            <a className='mx-5 hover:text-blue-500 transition duration-200'>Contact</a>
        </div>

    </div>
    )
}

export default Home