import React from 'react'
import { useHistory } from "react-router-dom";
import Services from './Services';
import Footer from './Footer';



function Home() {
    const history = useHistory()




    return (
    <div className="home-image"> 
    <div  className='flex items-center justify-center' >

<img className='rounded-full w-96' src='https://i.imgur.com/SxCU1MY.png' />
</div>
        {/* <div className='flex flex-row justify-center'>
            <h1 className="text-xl font-bold md:text-2xl">
            Allright Computer Services
            </h1>
        </div> */}

        <div className=' flex flex-row justify-center font-bold '>
            <a className=' hover:text-blue-500 transition duration-200 h-96' onClick={() => history.push('/about')}>About</a>

            <a className=' mx-5 hover:text-blue-500 transition duration-200'
            onClick={() => history.push('/services')}
            >Services</a>

            <a className=' hover:text-blue-500 transition duration-200'>Contact</a>
        </div>

      

        <Footer />

    </div>
    )
}

export default Home