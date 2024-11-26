//This file is not a reusable component. It is only for navigation.

import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'},
    ]

    return (
        <nav className='flex space-x-6 border-b mb-1.5 px-5 h-14 items-center'>
            <Link href="/"><AiFillBug/></Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                    <Link key={link.href} 
                        className='text-zinc-900 hover:text-zinc-500 transition-colors'  
                        href={link.href}>
                        {link.label}
                    </Link>)}
            </ul>   
        </nav>
    )
}

export default NavBar