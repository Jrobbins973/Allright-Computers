import { useState } from "react"
import React from 'react'
import { useHistory } from "react-router-dom";


function Services() {
    const history = useHistory()

    const [toggleSpyware, setToggleSpyware] = useState(false)


    return (
        <div className="container mx-auto p-0 flex flex-col md:flex-col cursor-default">

    <a className=" flex justify-center cursor-pointer" onClick={() => history.push("/")}>Home</a>

    
    <div class=" grid xl:grid-cols-3 xl:mx-auto md:grid-cols-2 gap-12 mt-20 justify-center">

        <div class="bg-white p-4 w-96 h-96 sm:h-auto text-xl border-4 border-cyan-800 rounded-xl">  

            <p className='font-bold mb-8 font-mono'>Spyware / Virus Removal</p>
            
            <div>
                <p className="text-base font-sans">I will thoroughly scan your device to detect and remove any malicious software that may be causing issues. I'll also provide tips on how to protect your computer in the future, so you can avoid similar problems down the road. My goal is to get your computer running like new again, without any annoying pop-ups, crashes, or other issues. </p>
            </div>
        </div>
        




        <div class="bg-white p-4 w-96 h-96 sm:h-auto text-xl border-4 border-cyan-800 rounded-xl">  

            <p className='font-bold mb-8 font-mono'>Desktop / Laptop Repair</p>
            
            <div>
                <p className="text-base font-sans">I will conduct a comprehensive diagnostic test on your device to identify the root cause of any issues. I will then repair your device including hardware repairs, software repairs, virus removal, and more.  Additionally, I will provide you with tips on how to maintain your device. </p>
            </div>
        </div>

        <div class="bg-white p-4 w-96 h-96 sm:h-auto text-xl border-4 border-cyan-800 rounded-xl">  

            <p className='font-bold mb-8 font-mono'>Data Recovery</p>
            
            <div>
                <p className="text-base font-sans">I will use proven techniques to recover lost or corrupted data from your device.  With years of experience, I understand the importance of your data and will ensure that all recovered data is kept confidential and secure.</p>
            </div>
        </div>

        <div class="bg-white p-4 w-96 h-96 sm:h-auto text-xl border-4 border-cyan-800 rounded-xl">  

            <p className='font-bold mb-8 font-mono'>Hard Drive Replacement</p>
            
            <div>
                <p className="text-base font-sans">I provide a fast and efficient hard drive replacement service for all types of devices, including desktops, laptops, and servers. I'll carefully install a new hard drive and transfer your data, ensuring that all your important files are safe and secure. </p>
            </div>
        </div>

        <div class="bg-white p-4 w-96 h-96 sm:h-auto text-xl border-4 border-cyan-800 rounded-xl">  

            <p className='font-bold mb-8 font-mono'>Windows Installation</p>
            
            <div>
                <p className="text-base font-sans">I provide a fast and reliable service to install or upgrade your computer's operating system to the latest version of Microsoft Windows. . I'll also help you set up your device with the latest security updates, drivers, and software, so you can get the most out of your device. </p>
            </div>
        </div>

        <div class="bg-white p-4 w-96 h-96 sm:h-auto text-xl border-4 border-cyan-800 rounded-xl">  

            <p className='font-bold mb-8 font-mono'>Performance Upgrades</p>
            
            <div>
                <p className="text-base font-sans"> I provide a range of performance upgrades to boost your computer's speed and overall performance. From increasing your device's RAM to upgrading its storage or graphics capabilities, I'll help you identify the best upgrades to meet your needs and budget.I can also help you optimize your device's settings and remove unnecessary software, further improving its performance.</p>
            </div>
        </div>

        

        
    </div>

        </div>
    )
}

export default Services