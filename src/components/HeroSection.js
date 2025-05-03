import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ React Router
import computerimage from "../assets/images/banner (2).png";

const HeroSection = () => {
  const [showName, setShowName] = useState(true);
  const navigate = useNavigate(); // ✅ useNavigate Hook

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to scroll and update URL
  const handleScroll = (sectionId, route) => {
    navigate(route); // Update URL

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay for route update
  };


  return (
    <div id="home" className="relative bg-[#0a0f2c] overflow-hidden flex items-center h-[80vh]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2c] via-[#0c1240] to-[#16245c] opacity-60 animate-pulse"></div>

      {/* Binary Digits Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-orange-500 text-xl font-mono opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `binaryFall ${3 + Math.random() * 5}s infinite alternate ease-in-out`
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center relative z-10 w-full">
        {/* Left Side (Text Content) */}
        <div className="w-full items-center text-center sm:text-left lg:w-1/2 min-h-[50vh] justify-center relative z-20 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white lg:mt-16">
            I'm a{" "}
            <span className={`transition-opacity duration-500 ${showName ? "opacity-100" : "opacity-0"}`}>
              Syeda Aliza Ali
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-auto lg:mt-5">
            Passionate about creating innovative solutions through code.
          </p>
          <div className=" flex flex-col sm:flex-row sm:justify-center lg:mx-auto mt-8 gap-4">
            <button
              onClick={() => handleScroll("projects")}
              className="px-6 py-3 text-white bg-orange-500 rounded-lg hover:bg-white hover:text-orange-500 text-lg transition "
            >
              View Projects
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-500 hover:text-white text-lg transition"
            >
              Contact Me
            </button>

          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="h-[70vh] flex justify-end">
          <img
            src={computerimage}
            alt="Developer"
            className="h-[80vh] w-auto object-cover transition-transform duration-300 absolute right-0 top-0 "
          />
        </div>
      </div>

      {/* Keyframes Animation */}
      <style>
        {`
          @keyframes binaryFall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100px); opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
