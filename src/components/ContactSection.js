import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // EmailJS import karein

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ EmailJS ke liye correct template parameters
    const templateParams = {
      user_name: formData.name, // Match EmailJS variable names
      user_email: formData.email,
      user_message: formData.message,
    };

    emailjs
      .send(
        "service_f923f5d", // ✅ EmailJS Service ID 
        "template_lo11rjd", // ✅ EmailJS Template ID 
        templateParams, // ✅ Correct template parameters
        "pAwxVaVNAgpyNnghL" // ✅ EmailJS Public Key 
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log("Email sent:", response);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <div id="contact" className="py-12 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 flex items-center justify-center">
          <FaEnvelope className="mr-2" /> Contact
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 text-center">Get In Touch</p>
        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
