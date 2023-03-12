import React from 'react'
import { useHistory } from "react-router-dom";

function About() {
    const history = useHistory()



    return (
        <div className='container flex flex-col m-30 items-center'>
            <a onClick={() => history.push('/')}>Home</a>
            <h1>About Me:</h1>
            <p className='mx-20 my-5'>Hey there, I'm Dave! I'm a local IT professional with With 20 years of experience fixing computers, I've got the skills to get you back up and running in no time. For twelve of those years, I was lucky enough to work in the Tech Services Department of a school district, where I honed my expertise helping folks just like you. </p>

            <p className='mx-20 my-10'>Now, my mission is to help folks in the Lake Monticello and Palmyra area with their computer needs, whether it's fixing a broken device or setting up a new system. I'm your go-to guy for all your residential computer services.</p>
            
            <p className='mx-20 my-5'>The best part? I live nearby, which means I can offer a speedy response and quick turnaround time to get you back up and running in a flash. So if you need a helping hand with your computer troubles, don't hesitate to give me a shout!</p>
            
            
            
        </div>
    )
}

export default About