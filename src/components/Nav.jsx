// import { BsPerson } from 'react-icons/bs';
// import { BiSearch } from 'react-icons/bi';
// import { AiOutlineClose } from 'ract-icons/ai'

import { useState } from "react"
import { MobileNav } from "./MobileNav"

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
        <nav className="flex justify-between items-center h-20 px-4">
            <h1 className="text-blue-700">
                BEACH.
            </h1>
            <ul className='hidden md:flex '>
                <li>Home</li>
                <li>Destinations</li>
                <li>Ticket</li>
                <li>Book Now</li>
                <li>Contact</li>
            </ul>
            <div className="hidden md:flex">
                User
            </div>
            <MobileNav />
        </nav>

    </header>
  )
}

export default Nav