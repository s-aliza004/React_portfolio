import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaCode, FaEnvelope, FaDownload, FaUser, FaBriefcase } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (sectionId) => {
        setIsOpen(false);
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        } else {
            scrollToSection(sectionId);
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Syeda Aliza Ali CV.pdf";
        link.download = "My_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo aligned to the corner */}
                    <div className="flex items-center sm:absolute sm:left-4">
                        <FaUser className="text-orange-500 text-lg" />
                        <h1 className="ml-2 font-medium text-lg">My Portfolio</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 mx-auto">
                        {[
                            { id: "home", icon: FaHome, label: "Home" },
                            { id: "projects", icon: FaProjectDiagram, label: "Projects" },
                            { id: "skills", icon: FaCode, label: "Skills" },
                            { id: "experience", icon: FaBriefcase, label: "Experience" },
                            { id: "contact", icon: FaEnvelope, label: "Contact" },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className={`flex items-center text-sm font-medium ${
                                    item.id === "home" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                <item.icon className="mr-2" /> {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Download CV Button for Desktop */}
                    <div className="hidden md:flex items-center">
                        <button 
                            onClick={handleDownload} 
                            className="bg-orange-500 text-white rounded-lg px-5 py-2 text-sm font-medium 
                                       hover:bg-white hover:text-orange-500 border border-orange-500 
                                       flex items-center"
                        >
                            Download CV <FaDownload className="ml-2" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4 flex flex-col space-y-4 z-50">
                    {[
                        { id: "home", icon: FaHome, label: "Home" },
                        { id: "projects", icon: FaProjectDiagram, label: "Projects" },
                        { id: "skills", icon: FaCode, label: "Skills" },
                        { id: "experience", icon: FaBriefcase, label: "Experience" },
                        { id: "contact", icon: FaEnvelope, label: "Contact" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`flex items-center text-sm font-medium ${
                                item.id === "home" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <item.icon className="mr-2" /> {item.label}
                        </button>
                    ))}

                    {/* Download CV Button for Mobile */}
                    <button 
                        onClick={handleDownload} 
                        className="bg-orange-500 text-white rounded-lg px-4 py-2 text-sm font-medium 
                                   hover:bg-white hover:text-orange-500 border border-orange-500 
                                   flex items-center justify-center w-auto mx-auto"
                    >
                        Download CV <FaDownload className="ml-2" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
