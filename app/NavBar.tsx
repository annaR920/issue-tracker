//This file is not a reusable component. It is only for navigation.
'use client'
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";
import { AiFillBug } from "react-icons/ai";
import {usePathname} from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname(); //How to call this hook. Dynamically hold current path.
    console.log('current path is: ',currentPath);

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'},
    ]
    //const sName= "";
    return (
        <nav className='flex space-x-6 border-b mb-1.5 px-5 h-14 items-center'>
            <Link href="/"><AiFillBug/></Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                    <Link key={link.href}
                        className={classnames({
                            'text-zinc-900' : link.href === currentPath,
                            'text-zinc-500' : link.href !== currentPath,
                            'hover:text-zinc-500 transition-colors': true
                        })}
                        // className={` ${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} transition-colors`}  
                        //className='text-zinc-900 hover:text-zinc-500 transition-colors'  
                        href={link.href}>{link.label}
                    </Link>)}
            </ul>   
        </nav>
    )  
}

export default NavBar