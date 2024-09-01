import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import "./Hero.css";
import "./navbar.css";
import Footer from "./Footer";
import Cons from "./cons";
import Contact from "./Contact";
import Chatbot from "./Chatbot";

const Hero = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [language, setLanguage] = useState("en"); // State for language selection

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      {/* <Navbar changeLanguage={changeLanguage} /> */}
      <div className="con">
        <div className="mi" style={{ display: "none" }}>
          <Chatbot></Chatbot>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            {language === "en"
              ? "Explore the Constitution with joy "
              : "संविधान का आनंद और उत्साह के साथ अन्वेषण करें"}
          </h1>
          {/* Toggle Menu Button */}
          {isMenuVisible && (
            <div className="menu">
              <a href="#home">{language === "en" ? "Home" : "होम"}</a>
              <a href="#services">
                {language === "en" ? "Services" : "सेवाएं"}
              </a>
              <a href="#about">
                {language === "en" ? "About" : "हमारे बारे में"}
              </a>
              <a href="#contact">
                {language === "en" ? "Contact" : "संपर्क करें"}
              </a>
            </div>
          )}
          <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf">
            <button className="hero-button">
              {language === "en"
                ? "Download Constitution"
                : "संविधान डाउनलोड करें"}
            </button>
          </a>
          {/* First row of cards */}
          <div className="card-row">
            <motion.div
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <h2 className="card-title">
                {language === "en"
                  ? "Simplifying the Constitution"
                  : "संविधान को सरल बनाना"}
              </h2>
              <p>
                {language === "en"
                  ? "Learn about the Preamble, Fundamental Rights, Directive Principles of State Policy, and Fundamental Duties in a simplified manner through engaging content."
                  : "प्रस्तावना, मौलिक अधिकारों, राज्य नीति के निदेशक सिद्धांतों और मौलिक कर्तव्यों के बारे में रोचक सामग्री के माध्यम से सरल तरीके से जानें।"}
              </p>
              <a href="#" className="card-link">
                {language === "en" ? "Read More" : "अधिक पढ़ें"}
              </a>
            </motion.div>
            <motion.div
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="card-title">
                {language === "en"
                  ? "Gamified Learning Experience"
                  : "खेल के माध्यम से सीखने का अनुभव"}
              </h2>
              <p>
                {language === "en"
                  ? "Engage with the Constitution through various games like Spin a Wheel, Board Games, and more, making learning fun and interactive for all age groups."
                  : "स्पिन ए व्हील, बोर्ड गेम्स और अन्य के माध्यम से संविधान के साथ जुड़ें, जो सभी उम्र के समूहों के लिए सीखने को मजेदार और इंटरैक्टिव बनाता है।"}
              </p>
              <a href="#" className="card-link">
                {language === "en" ? "Learn More" : "और जानें"}
              </a>
            </motion.div>
          </div>
          {/* Second row of cards */}
          <div className="card-row">
            <motion.div
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="card-title">
                {language === "en" ? "Judiciary Tour" : "न्यायपालिका यात्रा"}
              </h2>
              <p>
                {language === "en"
                  ? "Take a virtual tour of the Indian Judiciary system, understand its functioning, and learn about landmark cases that shaped the Constitution."
                  : "भारतीय न्यायपालिका प्रणाली का आभासी दौरा करें, इसके कामकाज को समझें और संविधान को आकार देने वाले ऐतिहासिक मामलों के बारे में जानें।"}
              </p>
              <a href="#" className="card-link">
                {language === "en" ? "Explore Now" : "अभी अन्वेषण करें"}
              </a>
            </motion.div>
            <motion.div
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="card-title">
                {language === "en" ? "Write & Share" : "लिखें और साझा करें"}
              </h2>
              <p>
                {language === "en"
                  ? "Contribute to our blog by writing about different articles of the Constitution, share your insights, and read others' perspectives."
                  : "संविधान के विभिन्न अनुच्छेदों के बारे में लिखकर हमारे ब्लॉग में योगदान करें, अपने विचार साझा करें और दूसरों के दृष्टिकोण पढ़ें।"}
              </p>
              <a href="#" className="card-link">
                {language === "en" ? "Contribute" : "योगदान करें"}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <Cons />
      <Contact></Contact>

      {/* <Footer /> */}
    </>
  );
};

export default Hero;
