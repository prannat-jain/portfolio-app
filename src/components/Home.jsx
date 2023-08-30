import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0c3014]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#56da82]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#d7f3ca]">
          Prannat
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#9cad94]">
          I'm a Computer Science student.
        </h2>
        <p className="text-[#7a8874] py-4 max-w-[700px]">
          I have experience with full stack development, DevOps Engineering,
          research and much more!
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#58ee91] hover:border-[#177c41]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3"></HiArrowNarrowRight>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
