import React, { useState } from "react";
import "./contact.css"; // Import the CSS file for styling
import Navbar from "./Navbar";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, such as sending data to an API
    console.log("Form submitted:", formData);
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="bodyl">
        <div className="contact-container">
          <div className="content">
            <div className="form-box">
              <h2>Contact Us</h2>
              <p>Reach out to us regarding any problem!</p>
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
          <div className="left">
            <img src="img.jpg" alt="Contact Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
