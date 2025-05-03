import { FaCode, FaLaptopCode, FaBrain, FaLightbulb, FaHandshake, FaComments } from "react-icons/fa"; 

// ✅ Technical Skills
const technicalSkills = [
  { icon: <FaCode />, title: "Programming Languages", desc: "Python, Java, JavaScript, SQL, C" },
  { icon: <FaLaptopCode />, title: "Web Development", desc: "React.js, HTML5, CSS3, Bootstrap, Django" },
  { icon: <FaBrain />, title: "Machine Learning", desc: "TensorFlow, PyTorch, Scikit-learn" },
];

// ✅ Soft Skills
const softSkills = [
  { icon: <FaLightbulb />, title: "Problem Solving", desc: "Logical thinking and analytical approach" },
  { icon: <FaHandshake />, title: "Adaptability", desc: "Quickly learning and adjusting to new environments" },
  { icon: <FaComments />, title: "Communication", desc: "Effective verbal and written communication" },
];

const SkillsSection = () => {
  return (
    <div id="skills" className="py-12 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 flex items-center justify-center">
          <FaCode className="mr-2" /> Skills
        </h2>

        {/* ✅ Technical Skills Section */}
        <p className="mt-2 text-2xl font-bold text-gray-900 text-center">Technical Skills</p>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          {technicalSkills.map(({ icon, title, desc }) => (
            <div key={title} className="relative">
              <div className="absolute h-12 w-12 flex items-center justify-center bg-orange-500 text-white rounded-md text-2xl">
                {icon}
              </div>
              <p className="ml-16 text-lg font-medium text-gray-900">{title}</p>
              <p className="ml-16 mt-2 text-base text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
        <hr className="mt-5"></hr>

        {/* ✅ Soft Skills Section */}
        <p className="mt-5 text-2xl font-bold text-gray-900 text-center">Soft Skills</p>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          {softSkills.map(({ icon, title, desc }) => (
            <div key={title} className="relative">
              <div className="absolute h-12 w-12 flex items-center justify-center bg-[rgba(11,16,54,1)]  text-white rounded-md text-2xl">
                {icon}
              </div>
              <p className="ml-16 text-lg font-medium text-gray-900">{title}</p>
              <p className="ml-16 mt-2 text-base text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
