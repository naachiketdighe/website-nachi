import { Bars3Icon } from '@heroicons/react/16/solid';
import react from 'react';

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    return ( 
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-green-700 shadow-md"> 
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold"> NACHO 
            <span className="text-yellow-300 font-bold">SITE</span></h1>
            <div className="nav-link">Home</div>
            <div className="nav-link">Work Experience</div>
            <div className="nav-link">Leadership Experience</div>
            <div className="nav-link">Projects</div>
            <div className="nav-link">Contact Me</div>
            <div onClick={openNav}> <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white"></Bars3Icon></div>

            </div>
    </div>
    );
};

export default Nav