import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
const Home = () => {
    return (
        <div className="h-[88vh] .bg-[url('/images/backdrop.jpg')] bg-cover bg-center"> <Particle />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
            <h1 className="text-[40px] md:text-[40px] text-white font-bold"> HI, I'M <span className="text-orange-300">NACHI AND MY INTERESTS INCLUDE:</span></h1>
            <TextEffect />
            <p className="mt-[2rem] text-[20px] text-white font-bold">
            Computer Science major with a minor in Software Engineering, I have completed five internships with companies such as  
            <span className="text-orange-300"> Chamberlain Group</span>—a manufacturer of garage door openers and the MyQ app, 
            <span className="text-orange-300"> Delta Air Lines</span>—an airline recognized for having the highest customer satisfaction in First/Business and Premium Economy classes according to the J.D. Power 2024 study, 
            and <span className="text-orange-300">ITP Aero</span>—a Spanish firm specializing in the design, development, and manufacture of aero engine components for both civil and military aircraft.

            </p>
            </div>
        <div className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px] ">
            <Image src="/images/photo1-nobg.png" alt="Me" layout= "fill" className="object-cover rounded full"/>
            </div>
        </div>
        </div>
    );
};

export default Home;