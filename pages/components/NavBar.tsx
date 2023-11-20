
import React from 'react';
import Link from 'next/link';
const NavBar: React.FC = () => {
    return (        
        <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>MB</h1>          
            <ul className='flex items-center gap-2'>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
      </nav>
    );
}

export default NavBar;
