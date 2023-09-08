import React from 'react'

export const MobileNav = () => {
  return (
    <>
        {/* mobile menu */}
        <div className="md:hidden">
                MENU
            </div>
            <div className="flex flex-col absolute w-full top-0 left-[-100%] px-4 py-8 bg-gray-100/90">
                <ul className=''>
                    <h1>BEACH.</h1>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Ticket</li>
                    <li>Book Now</li>
                    <li>Contact</li>
                </ul>
                <div className="flex flex-col my-4">
                    <button className="my-4">Search</button>
                    <button>Account</button>
                </div>
                <div className="flex justify-between">
                    <div className="icon w-8 h-8 px-2 py-2 bg-blue-700 rounded-full text-white">fa</div>
                    <div className="icon w-8 h-8 px-2 py-2 bg-blue-700 rounded-full text-white">in</div>
                    <div className="icon w-8 h-8 px-2 py-2 bg-blue-700 rounded-full text-white">yo</div>
                    <div className="icon w-8 h-8 px-2 py-2 bg-blue-700 rounded-full text-white">li</div>
                </div>
            </div>
    </>
  )
}
