import React, { useState } from "react";
import "./Tour.css"; // Import the CSS file
import Navbar from "./Navbar";
import Chatbot from "./Chatbot";

const Tour = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    {
      imgSrc: "2.jpg",
      altText: "1",
      title: "Old Parliament House",
      details: "1947 Old Parliament House",
    },
    {
      imgSrc: "4.jpg",
      altText: "2",
      title: "Inauguration by Viceroy",
      details:
        "The Old Parliament House in India, inaugurated by Viceroy Lord Irwin in 1927",
    },
    {
      imgSrc: "5.jpg",
      altText: "3",
      title: "Nehru's Tryst with Destiny",
      details: "Nehru's 'Tryst with Destiny'",
    },
    {
      imgSrc: "1.jpg",
      altText: "4",
      title: "2024 New Parliament House",
      details: "Bird's eye view",
    },
    {
      imgSrc: "6.jpg",
      altText: "5",
      title: "Front View",
      details: "Front facade of the new Parliament Building",
    },
    {
      imgSrc: "3.jpg",
      altText: "6",
      title: "Rajya Sabha",
      details: "View of the proposed Rajya Sabha Chamber",
    },
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="zx">
      {/* <Navbar></Navbar> */}
      <div>
        <p className="head">Evolution of the Parliament House</p>
        <section className="slider-container">
          <div className="slider-images">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className={`slider-img ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img src={item.imgSrc} alt={item.altText} />
                <h1 className="hello">{item.title}</h1>
                <div className="details">
                  <h2>{item.details}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page2">
          <p className="new">New Parliament House</p>
          <div className="page2_1">
            <div className="vid">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_AOzpFXocKI?si=TATBHYXnlVobXRax"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="texth">
              <p>
                India's New Parliament House, inaugurated in 2023, represents a
                significant milestone in the nation's democratic journey.
                Designed with a triangular structure to symbolize the strength
                and stability of India's governance, the building integrates
                modern technology with traditional Indian architectural
                elements. It features expansive halls, advanced digital
                infrastructure, and eco-friendly practices, ensuring it meets
                the demands of a rapidly growing and evolving democracy. The new
                building not only provides a future-ready space for legislative
                functions but also stands as a testament to India's commitment
                to progress while respecting its rich cultural heritage.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tour;
