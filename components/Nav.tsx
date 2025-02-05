import react from 'react';

const Nav = () => {
    return ( 
    <div className="w-[100%] top-0 h-[12vh] bg-green-700 shadow-md"> 
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold"> NAC 
            <span className="text-yellow-300 font-bold">HO</span></h1>
            <div className="nav-link">Home</div>
            <div className="nav-link">Work Experience</div>
            <div className="nav-link">Leadership Experience</div>
            <div className="nav-link">Highlights</div>
            <div className="nav-link">Contact Me</div>


            </div>
    </div>
    );
};

export default Nav