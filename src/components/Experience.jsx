import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full md:f-screen text-gray-300 bg-[#0c3014]"
    >

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-[#1a4731] p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Software Developer Intern</h2>
            <p className="text-lg">Nasdaq Verafin</p>
            <p className="text-lg">May 2024-Present</p>
            <p className="text-lg mt-4">


            </p>

            <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
            <ul className="list-disc list-inside">
              <li>Frontend Development</li>
              <li>Testing</li>
              <li>Deployment</li>
            </ul>
            </div>
            
            <div className="bg-[#1a4731] p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Research Assistant</h2>
            <p className="text-lg">Dalhousie University</p>
            <p className="text-lg">Sep 2023  - Present</p>
            <p className="text-lg">Remote</p>


            <ul className="list-disc list-inside">
            <li>Developing android and ios mobile applications using flutter, Java and Swift for their flagship application at the Labs.</li>
            <li>Creating dashboards using React.js, Node.js, and MongoDB for data presentation and analysis.</li>
            <li>Working on creating an encryption apparatus for data using asymmetric and symmetric public and private keys</li>
            <li>Developing an AI/ML computer vision program using tensorflow, OpenCV and yolo.</li>
            </ul>

            <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
            </ul>
            </div>

            <div className="bg-[#1a4731] p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Teaching Assistant</h2>
            <p className="text-lg">Dalhousie University</p>
            <p className="text-lg">Sep 2023 - Present</p>
            <p className="text-lg">Goldberg CS Building</p>

            <ul className="list-disc list-inside">
            <li>Assisted in the development of course materials and assignments for the course.</li>
            <li>Conducted tutorials and labs for students to help them understand the course material.</li>
            <li>Graded assignments and provided feedback to students.</li>
            </ul>

            <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
            <ul className="list-disc list-inside">
              <li>Java</li>
            </ul>
            </div>

            <div className="bg-[#1a4731] p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Student Developer</h2>
            <p className="text-lg">Nova Scotia Health</p>
            <p className="text-lg">May 2023 - Present</p>
            <p className="text-lg">Remote</p>

            <ul className="list-disc list-inside">
            <li>Developed secure databases to enable data collection in the neurosurgery department for 5000+ participants over its lifetime.</li>
            <li>Performed data analysis with Python, R, and data visualization in Tableau and Power BI to enhance reporting insights.</li>
            <li>Created a data analysis dashboard to enhance reporting insights using node.js platform and javascript.</li>
            </ul>

            <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
            <ul className="list-disc list-inside">
              <li>Python</li>
              <li>R</li>
              <li>Tableau</li>
              <li>Power BI</li>
              <li>Node.js</li>
            </ul>

            </div>

            <div className="bg-[#1a4731] p-4 rounded-lg">
            <h2 className="text-2xl font-bold">DevOps Engineer</h2>
            <p className="text-lg">Point Zero Solutions</p>
            <p className="text-lg">Nov 2022 - Mar 2023</p>
            <p className="text-lg">Remote</p>

            <ul className="list-disc list-inside">
            <li>Created an ML powered object and text recognition program with Java, python jupyter, tensorflow.</li>
            <li>Created an automated testing suite for an AI Python application with Jenkins, Docker, AWS Cloud and improved code quality by over 50 Percent.</li>
            <li>Wrote unit tests for REST APIs and functions using PyTest, Junit.</li>
              <li>Setup for continuous integration and delivery on Docker and Google Cloud Run.</li>
</ul>

            <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
            <ul className="list-disc list-inside">
              <li>Java</li>
              <li>Python</li>
              <li>Tensorflow</li>
              <li>Jenkins</li>
              <li>Docker</li>
              <li>GCP</li>
            </ul>
            </div>
            </div>
            </div>
    </div>
  );
};

export default Experience;
