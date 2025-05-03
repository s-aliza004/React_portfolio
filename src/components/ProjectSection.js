import Slider from "react-slick";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import pro1 from "../assets/images/codecave.png";
import pro2 from "../assets/images/cos_1.png";
import pro3 from "../assets/images/form.jpeg";
import pro4 from "../assets/images/sql-injection.png";
import pro5 from "../assets/images/heart_stroke.png";
import pro6 from "../assets/images/task5.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: "codecave",
    title: "Codecave - Blog Website",
    description: "A responsive blog website built using Bootstrap and HTML.",
    imageUrl: pro1,
    githubLink: "https://github.com/s-aliza004/Website-bootstrap-and-HTML",
    liveLink: "https://s-aliza004.github.io/Website-bootstrap-and-HTML/",
  },
  {
    id: "desktop-site",
    title: "Cosmetic Shop - Desktop based",
    description: "A desktop application using NetBeans.",
    imageUrl: pro2,
  },
  {
    id: "form",
    title: "Form Validation page",
    description: "A form validation page built with JavaScript and HTML.",
    imageUrl: pro3,
  },
  {
    id: "sqlinjection",
    title: "SQL Injection Exploit on PHP Login Page",
    description: "This project demonstrates a SQL Injection attack.",
    imageUrl: pro4,
  },
  {
    id: "heartstroke",
    title: "Heart Stroke Predictor",
    description: "An application for predicting the risk of stroke using ML.",
    imageUrl: pro5,
  },
  {
    id: "task",
    title: "Task Management System",
    description: "A task management app with full CRUD and auth features.",
    imageUrl: pro6,
  },
];

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center flex items-center justify-center">
        <FaProjectDiagram className="mr-2" /> Projects
      </h2>
      <div className="mt-10 px-4">
        <Slider {...settings}>
          {projects.map(({ id, title, description, imageUrl }) => (
            <div key={id} className="px-3">
              <Link
                to={`/project/${id}`}
                className="group block h-full no-underline"
              >
                <div className="relative border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-full">
                  {/* Image + Hover Overlay */}
                  <div className="relative h-48 overflow-hidden rounded-md">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                      <span className="text-white text-lg font-semibold">
                        Visit Details
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectSection;
