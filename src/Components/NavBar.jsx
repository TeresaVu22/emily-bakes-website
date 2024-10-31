import React from 'react';
import Logo from '../../public/OctaAnalytics_logo.png'

const NavBar = () => {
    const links = [
        {
            id: 1,
            link: 'Login',
        },
        {
            id: 2,
            link: 'Sign Up',
        },
    ];

    return (
        <nav className='h-20 bg-pink-100 w-full flex justify-between items-center px-4 text-2xl font-mate fixed'>
            <div className=' flex flex-row gap-2 items-center justify-center'>
                <img src={Logo} className=" h-20" alt="Cake1" />
                <div className='text-2xl font-bold font-caveat px-4 capitalize text-black-500 
                            hover:scale-105 duration-200 hover:text-red-400 z-10 md:text-5xl'>
                    Emily Bakes Cakes
                </div>
            </div>
            <ul className='flex flex-row gap-7'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className='px-4 cursor-pointer capitalize text-black-500 
                        hover:scale-105 duration-200 hover:text-red-500 z-10 font-roboto border border-black rounded-xl'
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </nav>
    );
}; // need to add smooth scroll

export default NavBar;
