import React from "react";
import aws from "../assets/aws.png";
import css from "../assets/css.png";
import gcp from "../assets/gcp.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import python from "../assets/python.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div
      id="skills"
      name="skills"
      className="w-full h-screen bg-[#0c3014] text-gray-300"
    >
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[green]">
            Skills
          </p>
          <p className="py-4">
            I have experience with full stack development, DevOps Engineering,
            research and much more!
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={aws} alt="aws" />
            <p className="my-4">AWS</p>
          </div>

          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="css" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={gcp} alt="gcp" />
            <p className="my-4">GCP</p>
          </div>

          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={git} alt="git" />
            <p className="my-4">GIT</p>
          </div>

          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="html" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={js} alt="js" />
            <p className="my-4">JS</p>
          </div>

          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={python} alt="python" />
            <p className="my-4">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
