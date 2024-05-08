import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Nasdaq Verafin",
    period: "May 2024 - Present",
    details: ["Backend Development", "Cloud Deployment", "Testing", "Deployment"],
  },
  {
    title: "Research Assistant",
    company: "Dalhousie University",
    period: "Sep 2023 - Present",
    details: ["Developing android and ios mobile applications using flutter, Java and Swift for their flagship application at the Labs", "Creating dashboards using React.js, Node.js, and MongoDB for data presentation and analysis.", "Working on creating an encryption apparatus for data using asymmetric and symmetric public and private keys"],
  },
  {
    title: "Teaching Assistant",
    company: "Dalhousie University",
    period: "Sep 2023 - Present",
    details: ["Assisted in the development of course materials and assignments for the course.", "Conducted tutorials and labs for students to help them understand the course material.", "Graded assignments and provided feedback to students."],
  },
  {
    title: "Student Developer",
    company: "Nova Scotia Health",
    period: "May 2023 - Apr 2024",
    details: ["Developed secure databases to enable data collection in the neurosurgery department for 5000+ participants over its lifetime.", "Performed data analysis with Python, R, and data visualization in Tableau and Power BI to enhance reporting insights.", "Created a data analysis dashboard to enhance reporting insights using node.js platform and javascript."],
  },
  {
    title: "DevOps Engineer",
    company: "Point Zero Solutions",
    period: "Nov 2022 - Mar 2023",
    details: ["Created an ML powered object and text recognition program with Java, python jupyter, tensorflow.", "Created an automated testing suite for an AI Python application with Jenkins, Docker, AWS Cloud and improved code quality by over 50 Percent.", "Wrote unit tests for REST APIs and functions using PyTest, Junit.", "Setup for continuous integration and delivery on Docker and Google Cloud Run."],

  }
];

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Animation happens only once when the element is scrolled into view
    });
  }, []);

  return (
    <div className="w-full text-gray-300 bg-[#0c3014]" id="experience">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Experience</h1>
        <div className="flex flex-col items-center mt-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg bg-[#1a4731] w-4/5 my-4 ${idx % 2 === 0 ? 'ml-0 mr-auto' : 'mr-0 ml-auto'}`}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h2 className="text-2xl font-bold">{exp.title}</h2>
              <p className="text-lg">{exp.company}</p>
              <p className="text-lg">{exp.period}</p>
              <ul className="list-disc list-inside mt-4">
                {exp.details.map((detail, detailIdx) => (
                  <li key={detailIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
