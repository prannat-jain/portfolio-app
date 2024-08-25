import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-[#0c3014] to-[#0a2510] text-gray-200 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center">
          <span className="border-b-4 border-[#4bff4b] pb-2">About</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">Welcome to my portfolio!</h3>
            <p className="text-lg leading-relaxed">
              I'm a passionate Computer Science student at Dalhousie University, with a diverse skill set spanning full stack development, DevOps engineering, and cutting-edge research. My journey in tech is driven by curiosity and a commitment to innovation.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-[#0e3a18] p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Quick Facts</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Studying Computer Science at Dalhousie University</li>
                <li>Experienced in full stack development</li>
                <li>Proficient in DevOps engineering</li>
                <li>Engaged in various research projects</li>
                <li>Always eager to learn and tackle new challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
