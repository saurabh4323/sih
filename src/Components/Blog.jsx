import React, { useState, useEffect } from "react";
import "./blog.css"; // Ensure your CSS file is imported

const Blog = () => {
  // State to manage dialog visibility, input values, and saved feedback
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("Article");
  const [articleNumber, setArticleNumber] = useState(""); // State to handle article number input
  const [savedFeedback, setSavedFeedback] = useState([]);
  const [dialogType, setDialogType] = useState(""); // State to manage dialog type

  // Effect to load saved feedback from local storage when the component mounts
  useEffect(() => {
    const storedFeedback = localStorage.getItem("savedFeedback");
    if (storedFeedback) {
      setSavedFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  // Function to open the dialog and set the current blog index and dialog type
  const openDialog = (index, type) => {
    setCurrentBlogIndex(index);
    setDialogType(type);
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    setFeedback("");
    setArticleNumber(""); // Reset article number input
  };

  // Function to handle saving feedback
  const handleSaveFeedback = () => {
    if (feedback.trim() === "") return; // Prevent saving empty feedback
    const newFeedback = {
      index: currentBlogIndex,
      text: feedback,
      type: feedbackType,
      articleNumber: dialogType === "Article" ? articleNumber : null, // Include article number if applicable
    };
    const updatedFeedback = [...savedFeedback, newFeedback];
    setSavedFeedback(updatedFeedback);
    localStorage.setItem("savedFeedback", JSON.stringify(updatedFeedback)); // Save to local storage
    closeDialog(); // Close dialog after saving feedback
  };

  // Function to handle deleting feedback
  const handleDeleteFeedback = (feedbackIndexToDelete) => {
    const updatedFeedback = savedFeedback.filter(
      (_, index) => index !== feedbackIndexToDelete
    );
    setSavedFeedback(updatedFeedback);
    localStorage.setItem("savedFeedback", JSON.stringify(updatedFeedback));
  };

  return (
    <div className="bdl">
      <section className="blog-section">
        <div className="blog-header">
          <h1>Our Latest Blog Post</h1>
          <p>
            "Explore our latest blog post, where we delve into key
            constitutional concepts and their impact on modern society."
          </p>
          <button className="view-all-btn">View All Blog</button>
        </div>

        <div className="blog-cards">
          {/* Array of blog cards */}
          {[1, 2, 3].map((item, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image-container">
                <img
                  src={
                    index === 0
                      ? "https://cdn.prod.website-files.com/637610b6e8be873142dadb34/63ebb4068a6dff9cd63c1b27_Knowledge-article-template.png"
                      : index === 1
                      ? "https://surveysparrow.com/wp-content/uploads/2020/12/anonymous-suggestion-box_1.png"
                      : "https://boast.io/wp-content/uploads/2021/02/4-5-customer-feedback-form-templates.jpg"
                  }
                  alt={
                    index === 0 ? "Article" : index === 1 ? "Views" : "Feedback"
                  }
                  className="blog-image"
                />
                <div className="blog-category">
                  {index === 0 ? "ARTICLE" : index === 1 ? "VIEWS" : "FEEDBACK"}
                </div>
                <div
                  className="plus-button"
                  onClick={() =>
                    openDialog(index, index === 0 ? "Article" : "Feedback")
                  }
                >
                  +
                </div>
              </div>
              <div className="blog-content">
                <span className="blog-date">Sep 1, 2024</span>
                <h2>
                  {index === 0
                    ? "Article Blog Cards"
                    : index === 1
                    ? "View Blog Cards"
                    : "Feedback Blog Cards"}
                </h2>
                <p>
                  {index === 0
                    ? "You can propose amendments to existing articles or draft additional articles."
                    : index === 1
                    ? "You can propose ideas for laws not covered by the Constitution or currently under litigation."
                    : "Feel free to share your valuable feedback here."}
                </p>
              </div>
              {/* Display saved feedback related to this blog card */}
            </div>
          ))}
        </div>

        {/* Dialog Box */}
        {isDialogOpen && (
          <div className="dialog">
            <h3 style={{ textAlign: "center", color: "red", fontSize: "23px" }}>
              {dialogType === "Article"
                ? "Article Number & Feedback"
                : "Feedback"}
            </h3>
            {dialogType === "Article" && (
              <input
                type="text"
                value={articleNumber}
                onChange={(e) => setArticleNumber(e.target.value)}
                placeholder="Enter article number"
                style={{
                  textAlign: "center",
                  width: "350px",
                  marginBottom: "10px",
                  fontSize: "13px",
                }}
              />
            )}
            <textarea
              style={{
                textAlign: "center",
                height: "70px",
                width: "350px",
                marginBottom: "10px",
                fontSize: "13px",
              }}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback here..."
            />
            <button
              className="jk"
              style={{
                width: "150px",
                height: "25px",
                fontSize: "13px",
                marginRight: "10px",
              }}
              onClick={handleSaveFeedback}
            >
              Save
            </button>
            <button
              className="jk"
              style={{
                width: "150px",
                height: "25px",
                fontSize: "13px",
              }}
              onClick={closeDialog}
            >
              Cancel
            </button>
          </div>
        )}
      </section>

      {/* Feedback Section */}
      <div className="saved-feedback">
        {savedFeedback.map((item, feedbackIndex) => (
          <div key={feedbackIndex} className="feedback-item">
            <p className="feedback-text">
              {item.type === "Article"
                ? `Article ${item.articleNumber}: ${item.text}`
                : item.text}
            </p>
            <button
              className="delete-btn"
              onClick={() => handleDeleteFeedback(feedbackIndex)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
