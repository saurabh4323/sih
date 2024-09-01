import React, { useState } from "react";
import "./feature.css"; // Import the corresponding CSS file
import ArticleSearch from "./ArticleSearch";

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const articles = [
    { title: "Article 1", description: "Preamble definition." },
    { title: "Article 2", description: "Citizenship definition." },
    { title: "Article 3", description: "Formation of states." },
    { title: "Article 4", description: "Alteration of states." },
    { title: "Article 5", description: "Union and its territory." },
    { title: "Article 21", description: "Right to life protection." },
    { title: "Article 21A", description: "Right to free education." },
    {
      title: "Article 22",
      description: "Protection against arrest, detention.",
    },
    { title: "Article 23", description: "Prohibition of human trafficking." },
    { title: "Article 24", description: "Prohibition of child labor." },
    { title: "Article 25", description: "Freedom of religious practices." },
    { title: "Article 29", description: "Protection of cultural rights." },
    { title: "Article 30", description: "Rights of minorities preserved." },
    { title: "Article 32", description: "Constitutional remedies for rights." },
    { title: "Article 39A", description: "Equal justice, free legal aid." },
    { title: "Article 44", description: "Uniform civil code directive." },
    { title: "Article 50", description: "Separation of judiciary, executive." },
    { title: "Article 51", description: "Promotion of international peace." },
    { title: "Article 51A", description: "Citizen fundamental duties listed." },
    {
      title: "Article 61",
      description: "Procedure for presidential impeachment.",
    },
    { title: "Article 72", description: "Presidential power for pardons." },
    { title: "Article 76", description: "Attorney General's duties outlined." },
    { title: "Article 110", description: "Definition of money bills." },
    {
      title: "Article 112",
      description: "Annual financial budget presentation.",
    },
    {
      title: "Article 123",
      description: "Presidential ordinance-making power.",
    },
    {
      title: "Article 148",
      description: "Comptroller, Auditor General's appointment.",
    },
    { title: "Article 155", description: "Appointment of state governors." },
    { title: "Article 168", description: "Composition of state legislatures." },
    {
      title: "Article 324",
      description: "Election Commission powers established.",
    },
  ];
  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="feature-body">
      <div className="feature-container">
        <ul className="feature-article-list">
          {articles.map((article, index) => (
            <li
              key={index}
              className={`feature-article-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleDescription(index)}
            >
              {article.title}
              {activeIndex === index && (
                <div className="feature-description">{article.description}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <main className="feature-main">
        <h1 className="feature-title">Welcome to the Knowledge Source</h1>
        <div className="feature-search-container">
          <ArticleSearch></ArticleSearch>
        </div>
      </main>
    </div>
  );
};

export default Feature;
