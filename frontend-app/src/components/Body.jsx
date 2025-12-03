import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Body(){
    return(
        <div className="flex items-center justify-center gap-20 p-10 bg-white min-h-[80vh]">
        <img 
        src="./public/yessu.png"
        alt="My photo"
        className="w-60 h-60 rounded-full border-4 border-black object-cover"
        />
        <div className="text-4xl md:text-5xl font-bold text-black leading-tight space-y-3 animate-fadeUp [animation-delay:6s]">
        <p >Hi! <br/> I'm <span className="text-amber-500">Sri Lakshmi</span>
        <br/> 
        Full-Stack Developer</p>
        </div>
        </div>
    );
}

export default Body;