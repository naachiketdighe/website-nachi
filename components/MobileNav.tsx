import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
    nav: boolean;
    closeNav: () => void;
}
const MobileNav = ({nav,closeNav}:Props) => {

    const navAnimation = nav? "translate-x-0" : "translate-x-[-100%]";
    return (
            <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-green-700`}>
            <div className="w-[100-vw] h-[100vh] flex flex-col items-center justify-center">
            <div className="nav-link-mobile">Home</div>
            <div className="nav-link-mobile">Work Experience</div>
            <div className="nav-link-mobile">Leadership Experience</div>
            <div className="nav-link-mobile">Projects</div>
            <div className="nav-link-mobile">Contact Me</div>
            <div onClick={closeNav}> <XMarkIcon className="z-[100000] absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem[ h-[2rem] text-white"></XMarkIcon></div>
            </div>
        </div>
    );
};

export default MobileNav;