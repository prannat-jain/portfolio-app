const Projects = () => {

    return (
        <div 
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center bg-[#0c3014] text-gray-300"
        >
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Projects and Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            
        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">Nasdaq GenAI Hackathon and Challenge</h2>
        <p className="text-sm">12-13th July 2024</p>
        <p className="text-md mt-4"> </p>
        <p className="text-md mt-4">Placed 3rd in the hackathon</p>
        <a href="https://www.google.com" className="text-blue-500">Read More</a>
        </div>

        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">Ocean GenAI Hackathon</h2>
        <p className="text-sm">4-5th May 2024</p>
        <p className="text-md mt-4">Our team used audio sounds of marine animals, created a machine learning model which assisted with the classification of species and tracking of their movements for various benefits to the industry. </p>
        <p className="text-md mt-4">Placed 3rd in the hackathon</p>
        <a href="https://www.google.com" className="text-blue-500">Read More</a>
        </div>

        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">AI Object Recognition and Motion Tracking</h2>
        <p className="text-sm">Jan 2024</p>
        <br></br>
        <ul className="list-disc list-inside ">
        <li>Developed an AI application which identifies and tracks multiple objects in a video/image.</li>
        <li>Uses DeepSort algorithm to individually track numerous objects moving in the frame.</li>
        </ul>
        <a href="https://www.google.com" className="text-blue-500">Read More</a>
        </div>

        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">ChemAR</h2>
        <p className="text-sm">Sep 2023</p>
        <br></br>
        <ul className="list-disc list-inside ">
        <li>Developed an augmented reality powered program to support chemistry learning at Dalhousie University.</li>
        <li>Practiced Agile/Scrum and designed custom APIs using node.js to perform interactive molecule lookup using QR codes.</li>
        </ul>
        <a href="https://dalchemar.azurewebsites.net/" className="text-blue-500">Read More</a>
        </div>

        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">ScrapRadar</h2>
        <p className="text-sm">May 2023</p>
        <br></br>
        <ul className="list-disc list-inside ">
        <li>Created a web service where consumers and businesses can buy valuable scrap, by‑products, and waste materials</li>
        <li>Hosted on AWS EC2 with NGINX proxy and Node.js.</li>
        </ul>
        <a href="https://github.com/prannat-jain/ScrapRadar-server" className="text-blue-500">Read More</a>
        </div>

        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">Android TradeTrove Application</h2>
        <p className="text-sm">Jan 2023</p>
        <br></br>
        <ul className="list-disc list-inside ">
        <li>Mobile App that allows one to find people in the local area who are interested to exchange their used goods.</li>
        <li>Hosted on Firebase, with Google Maps integration.</li>
        <li>Built in android studio and exported signed APK for use.</li>
        </ul>
        <a href="https://www.google.com" className="text-blue-500">Read More</a>
        </div>

        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">Social Media App</h2>
        <p className="text-sm">Dec 2022</p>
        <br></br>
        <ul className="list-disc list-inside ">
        <li>Worked on a full‑stack, RESTful social media app, with login, registration, and secure authorization.</li>
        <li>Implemented bcrypt librarylibrary which enables password encryption for safe storage in MongoDB.</li>
        <li>Backend hosted on MongoDB, and Frontend built on React.js, client and server deployed on render.com.</li>
        </ul>
        <a href="https://admin-frontend-dpva.onrender.com/" className="text-blue-500">Read More</a>
        </div>

        <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-bold">Motorsports Telemetry Analysis</h2>
        <p className="text-sm">Aug 2022</p>
        <br></br>
        <ul className="list-disc list-inside ">
        <li>Provides graphical representation and analysis of F1 car telemetry data in charts and line graphs.</li>
        <li>Uses open source APIs as per query in Python using matplotlib and fastf1 libraries.</li>
        </ul>
        <a href="https://github.com/prannat-jain/FastF1" className="text-blue-500">Read More</a>
        </div>

        </div>
        </div>
        </div>
        
    )

};

export default Projects;