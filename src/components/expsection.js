import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Sprectex AI",
    duration: "Feb 2024 - Mar 2024",
    role: "Back-End Developer Intern",
    tasks: [
      "Implemented Python Code - Google Colab, Jupyter Notebook",
      "Built Authentication System Using Django framework",
      "Implemented CRUD operations on Task Management System Website (HTML, CSS, Bootstrap, Django)"
    ]
  },
  {
    company: "Let's Grow More",
    duration: "Sep 2023 - Sep 2023",
    role: "Front-End Developer Intern",
    tasks: [
      "Built TO-DO List - React.js",
      "Built Enrollment Form - HTML, CSS, Bootstrap, JavaScript",
      "Implemented Calculator Functionality - React.js"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 flex items-center justify-center">
          <FaBriefcase className="mr-2" /> Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold">{exp.company} ({exp.duration})</h3>
              <h4 className="text-md text-gray-600">{exp.role}</h4>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
