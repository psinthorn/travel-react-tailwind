import { useState } from 'react';
import { BiCollapse, BiMenu } from 'react-icons/bi';

export const MobileNav = () => {
    const [isMobile, setIsMobile] = useState(true);

    const showMobileMenu = () => {
        setIsMobile(!isMobile);
    }


  return (
    <>
        {/* mobile menu */}
        <div onClick={showMobileMenu} className="md:hidden z-10">
            {isMobile ? <BiMenu/> : <BiCollapse/> }    
        </div>
        <div onClick={showMobileMenu} className={isMobile ?  "flex flex-col absolute w-full top-[-100%] left-0 px-4 py-8 bg-gray-100/90" : "flex flex-col absolute w-full top-0 left-[0] px-4 py-8 bg-gray-100/90"}>
                <ul className=''>
                    {/* <h1 onClick={showMobileMenu} >BEACH.</h1> */}
                    <li onClick={showMobileMenu}>Home</li>
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
