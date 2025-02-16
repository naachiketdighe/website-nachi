import React, { useState} from "react";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import Home from "../components/Home";
import WorkExperience from "../components/WorkExperience";
import LeadershipExperience from "../components/LeadershipExperience";
const Homepage = () => {

  const [nav,setNav] =  useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
  <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} /> 
        <Nav openNav={openNav} />
        <Home />
        <div className="relative z-[30]">
        <WorkExperience />
        <LeadershipExperience/>
        </div>

      </div>
    
  </div>
  );
};

export default Homepage;