import { useParams } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import codecave1 from "../assets/images/codecave.png";
import codecave2 from "../assets/images/codecave2.png";
import codecave3 from "../assets/images/codecave3.png";
import cos0 from "../assets/images/cos.png";
import cos1 from "../assets/images/cos_1.png";
import cos2 from "../assets/images/cos_2.png";
import cos3 from "../assets/images/cos_3.png";
import form from "../assets/images/form.jpeg";
import sql0 from "../assets/images/sql-injection.png";
import sql1 from "../assets/images/sql-injection1.png";
import sql2 from "../assets/images/sql-injection2.png";
import sql3 from "../assets/images/sql-injection3.png";
import sql4 from "../assets/images/sql-injection4.png";
import sql5 from "../assets/images/sql-injection5.png";
import heartstroke from "../assets/images/heart_stroke.png";
import task1 from "../assets/images/task1.png";
import task2 from "../assets/images/task2.png";
import task3 from "../assets/images/task3.png";
import task4 from "../assets/images/task4.png";
import task5 from "../assets/images/task5.png";
import task6 from "../assets/images/task6.png";
import task7 from "../assets/images/task7.png";
import task8 from "../assets/images/task8.png";


const projects = [
  {
    id: "codecave",
    title: "📖 Codecave - Blog Website",
    description:"A responsive blog website built using Bootstrap and HTML. It features a sleek design, easy navigation, and interactive UI elements. The site allows users to read and interact with various blog posts, making it a user-friendly platform for content sharing.",
    images: [codecave1, codecave2, codecave3],
    githubLink: "https://github.com/s-aliza004/Website-bootstrap-and-HTML",
    liveLink: "https://s-aliza004.github.io/Website-bootstrap-and-HTML/",
  },
  {
    id: "desktop-site",
    title: "💄 Cosmetic Shop - Desktop based",
    description:"A desktop-based cosmetic shop management system developed using Java and NetBeans. This application provides an interactive user interface for managing inventory, processing sales, maintaining customer records, generating invoices, and offering an intuitive dashboard for real-time updates on stock and sales.",
    images: [cos0, cos1, cos2, cos3],
    githubLink: "https://github.com/s-aliza004/OOP-pROJECT",
  },
  {
    id: "form",
    title: "📝 Enrollment Form - Web based",
    description: "A modern enrollment form built with Bootstrap and HTML. This form is designed to be user-friendly and responsive, allowing students or users to easily input their information and submit it online with ease. It features validation, multiple input fields, and a clear layout for an efficient user experience.",

    images: [form],
    githubLink: "https://github.com/s-aliza004/LGMVIP-Web-Task-Number-2-",
  },
  {
    id: "sqlinjection",
    title: "💥 SQL Injection Exploit on PHP Login Page",
    description:
     "This project demonstrates a SQL Injection (SQLi) vulnerability on a PHP-based login form. It showcases how attackers can manipulate SQL queries via user input to gain unauthorized access to sensitive data and how to protect against such vulnerabilities using secure coding practices.",
    images: [sql0, sql1, sql2, sql3, sql4, sql5],
    githubLink: "https://github.com/s-aliza004/SQL-Injection-Project",
  },
{
  id: "heartstroke",
  title: "❤️ Heart Stroke Predictor",
  description:      "A web application for predicting the risk of stroke using machine learning based on user-provided health data. This project is a heart stroke prediction web application built with Django. It utilizes a pre-trained Random Forest model to assess the likelihood of a stroke based on various health parameters entered by the user. The app aims to raise awareness and provide early insights into stroke risks.",
  images: [heartstroke],
  githubLink: "https://github.com/s-aliza004/stroke-prediction-app",
},
{
id: "task",
title: "🧠 Task Management System – Django Web Application",
description:"This is a full-featured task management system developed using Django, offering a secure and intuitive platform for users to efficiently manage their daily tasks. The application supports user authentication, task creation, time tracking, and task prioritization with an elegant UI.",
images: [task1,task2,task3,task4,task5,task6,task7,task8],
githubLink: "https://github.com/s-aliza004/Django_pro",

},
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <h2 className="text-center text-red-500">Project Not Found</h2>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20 shadow-lg rounded-lg">
      {/* Image Section */}
      {project.images.length > 1 ? (
        <Slider {...settings}>
          {project.images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`${project.title} ${index}`}
                className="rounded-lg h-[400px] object-contain mx-auto  " 
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-center">
          <img
            src={project.images[0]}
            alt={project.title}
            className="rounded-lg h-[400px] object-contain mx-auto"
          />
        </div>
      )}

      {/* Project Details */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
        <p className="text-gray-700 mt-4 text-lg">{project.description}</p>
        <div className="mt-6 flex space-x-4 justify-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-700 text-lg flex items-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-700 text-lg flex items-center"
            >
              <FaLink className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
