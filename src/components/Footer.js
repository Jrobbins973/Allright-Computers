import React from 'react'

function Footer() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
<div>
    <footer class="cursor-default fixed bottom-0 bg-gray-800 text-white px-4 py-8 w-full">
        <div class="flex-grow max-w-7xl mx-auto h-26">
            <div class="md:flex md:justify-between">
            <div class="mb-4 md:mb-0 flex flex-row md:m-auto sm:mx-0">
                <h3 class="text-sm md:mx-10 sm:mx-2">Allright Computer Services</h3>
                <p onClick={() => openInNewTab('https://www.google.com/maps/place/3+Shiloh+Ct,+Palmyra,+VA+22963/@37.9315631,-78.3397595,17z/data=!4m6!3m5!1s0x89b38d09e79092d5:0x88958c9dfd71438f!8m2!3d37.9316477!4d-78.3381287!16s%2Fg%2F11c89cs27p')} class="text-sm md:mx-10 sm:mx-2 cursor-pointer">3 Shiloh Court, Palmyra, Virginia, USA</p>
                <a href='tel:+1-(434)484-2282'class="text-sm md:mx-10 sm:mx-2 cursor-pointer">(434)-484-2282</a>
                <p onClick={() => openInNewTab("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=drobbins56@gmail.com")} class="text-sm md:mx-10 sm:mx-2 cursor-pointer">drobbins56@gmail.com</p>
            </div>
    
            </div>
        
        </div>
    </footer>
    </div>
    )
}

export default Footer