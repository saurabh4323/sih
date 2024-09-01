import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./a.css"; // Updated CSS file path

const ArticleSearch = () => {
  const [articleNumber, setArticleNumber] = useState("");
  const [articleData, setArticleData] = useState(null);
  const [error, setError] = useState(null);
  const [utterance, setUtterance] = useState(null);
  const [remainingText, setRemainingText] = useState("");
  const [isListening, setIsListening] = useState(false); // State to control speech recognition

  useEffect(() => {
    if (articleNumber) {
      fetch(`/article.json`)
        .then((response) => response.json())
        .then((data) => {
          const article = data.articles.find(
            (article) => article.number === articleNumber
          );
          if (article) {
            setArticleData(article);
            setError(null);
          } else {
            setArticleData(null);
            setError("Article not found.");
          }
        })
        .catch(() => setError("Failed to fetch data."));
    }
  }, [articleNumber]);

  useEffect(() => {
    if (articleData) {
      readArticle();
    }
  }, [articleData]);

  const handleChange = (e) => {
    setArticleNumber(e.target.value);
  };

  const readArticle = () => {
    if (articleData) {
      const text = `${articleData.title}. Explanation: ${articleData.explanation}. Example: ${articleData.example}.`;
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.rate = 1; // Adjust this value to make the speech faster or slower

      newUtterance.onboundary = (event) => {
        setRemainingText(text.substring(event.charIndex));
      };

      setUtterance(newUtterance);
      speechSynthesis.speak(newUtterance);
    }
  };

  const stopReading = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  const resumeReading = () => {
    if (remainingText && !speechSynthesis.speaking) {
      const newUtterance = new SpeechSynthesisUtterance(remainingText);
      newUtterance.rate = 1;

      newUtterance.onboundary = (event) => {
        setRemainingText(remainingText.substring(event.charIndex));
      };

      setUtterance(newUtterance);
      speechSynthesis.speak(newUtterance);
    }
  };

  const handleSpeechRecognition = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setArticleNumber(spokenText);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setError("Speech recognition error.");
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="bodyv">
      <motion.div
        className="article-search-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="article-search-input-container">
          <input
            type="text"
            value={articleNumber}
            onChange={handleChange}
            placeholder="Enter article number"
            className="article-search-input"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="article-search-button"
            onClick={() => setArticleNumber(articleNumber)}
          >
            Search
          </motion.button>
          <button
            className="control-button"
            onClick={handleSpeechRecognition}
            disabled={isListening}
          >
            {isListening ? "Listening..." : "Speak Now"}
          </button>
        </div>
        {error && <p className="article-search-error">{error}</p>}
        {articleData && (
          <motion.div
            className="article-data-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="article-data-title">{articleData.title}</h2>
            <p className="article-data-text">
              <strong>Explanation:</strong> {articleData.explanation}
            </p>
            <p className="article-data-text">
              <strong>Example:</strong> {articleData.example}
            </p>
          </motion.div>
        )}
        {articleData && (
          <div className="article-controls">
            <button className="control-button" onClick={stopReading}>
              Stop
            </button>
            <button className="control-button" onClick={resumeReading}>
              Resume
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ArticleSearch;
