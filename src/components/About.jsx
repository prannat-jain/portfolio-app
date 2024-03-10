import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full h-screen bg-[#0c3014] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#4bff4b]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Please have a look around!</p>
          </div>
          <div className="">
            <p>
              I am a Computer Science student at the Dalhousie University. I've
              had experience with full stack development, DevOps Engineering,
              research and much more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
