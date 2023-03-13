import React from 'react'

function Footer() {
    return (
<div>
    <footer class="cursor-default fixed bottom-0 bg-gray-800 text-white px-4 py-8 w-full">
        <div class="flex-grow max-w-7xl mx-auto h-26">
            <div class="md:flex md:justify-between">
            <div class="mb-4 md:mb-0 flex flex-row md:m-auto sm:mx-0">
                <h3 class="text-sm md:mx-10 sm:mx-2">Allright Computer Services</h3>
                <p class="text-sm md:mx-10 sm:mx-2">3 Shiloh Court, Palmyra, Virginia, USA</p>
                <a href='tel:+1-(434)484-2282'class="text-sm md:mx-10 sm:mx-2 cursor-pointer">(434)-484-2282</a>
                <p class="text-sm md:mx-10 sm:mx-2">drobbins56@gmail.com</p>
            </div>
    
            </div>
            <hr class="my-8"/>
            <div class="text-sm text-gray-500 text-center">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
            <p>Designed and developed by <a href="#" class="underline hover:text-gray-400">Your Name</a>.</p>
            </div>
        </div>
    </footer>
    </div>
    )
}

export default Footer