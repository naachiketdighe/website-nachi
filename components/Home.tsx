import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
const Home = () => {
    return (
        <div className="h-[88vh] .bg-[url('/images/Background.png')] bg-cover bg-center"> <Particle />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center mt-[10vh]">
            <div>
            <h1 className="text-[40px] md:text-[40px] text-white font-bold"> HI, I'M <span className="text-orange-300">NACHI AND MY INTERESTS INCLUDE:</span></h1>
            <TextEffect />
            <p className="mt-[2rem] text-[20px] text-white font-bold">
            Computer Science major with a minor in Software Engineering, I have completed five internships with companies such as  
            <span className="text-orange-300"> Chamberlain Group</span>—a manufacturer of garage door openers and the MyQ app, 
            <span className="text-orange-300"> Delta Air Lines</span>—an airline recognized for having the highest customer satisfaction in First/Business and Premium Economy classes according to the J.D. Power 2024 study, 
            and <span className="text-orange-300">ITP Aero</span>—a Spanish firm specializing in the design, development, and manufacture of aero engine components for both civil and military aircraft.

            </p>
            <div className="mt-[2rem] flex-col space-y-8 sm:space-y-0 sm:flex-row items-center sm:space-x-8">
                <button type="button" className="px-[2rem] hover:bg-yellow-400 transition-all-duration-200 py-[1rem] text-[18px] font-bold uppercase bg-gray-400 text-blue-950 flex items-center space-x-2">
                <p>Download </p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"></ArrowDownTrayIcon>
                </button>

            </div>
            </div>
        <div className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px] ">
            <Image src="/images/Background.png" alt="Me" layout= "fill" className="object-cover rounded full"/>
            </div>
        </div>
        </div>
    );
};

export default Home;