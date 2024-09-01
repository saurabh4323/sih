// Games.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./game.css"; // Make sure this path is correct based on your project structure

const Game = () => {
  // Framer Motion Variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div>
      {/* Video Background */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="back-video"
        style={{ height: "165vh" }} // Inline styles in JSX use camelCase
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <source src="a.mp4" type="video/mp4" />
      </motion.video>

      {/* Game Cards Container */}
      <div className="containerx">
        <div className="card__container">
          {/* First Card */}
          <Link to={"/crossword"}>
            <motion.article
              className="card__article"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <img src="k.jpg" alt="Crossword" className="card__img" />
              <div className="card__data">
                <span className="card__description">
                  Crossword game on Indian Constitution.
                </span>
                <h2 className="card__title">Constitution Quest</h2>
              </div>
            </motion.article>
          </Link>

          {/* Second Card */}
          <Link to={"/quiz"}>
            <motion.article
              style={{ marginLeft: "40px" }}
              className="card__article"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <img src="trivia.jpg" alt="Trivia" className="card__img" />
              <div className="card__data">
                <span className="card__description">
                  Explore Parliament through engaging questions
                </span>
                <h2 className="card__title">Parliament Trivia</h2>
              </div>
            </motion.article>
          </Link>
        </div>
      </div>

      <div className="containerh">
        <div className="card__container" style={{ marginTop: "-50px" }}>
          {/* Third Card */}
          <Link to={"/guess"}>
            <motion.article
              className="card__article"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <img src="s.jpg" alt="Build Government" className="card__img" />
              <div className="card__data">
                <span className="card__description">
                  Strategize, build, and govern nations.
                </span>
                <h2 className="card__title">Build your Government</h2>
              </div>
            </motion.article>
          </Link>
          {/* Fourth Card */}
          <motion.article
            className="card__article"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ marginLeft: "10px" }}
            whileHover="hover"
          >
            <img
              style={{ height: "205px" }}
              src="memo1.jpg"
              alt="Memory Match"
              className="card__img"
            />
            <div className="card__data">
              <span className="card__description">
                Match pairs, test your memory.
              </span>
              <h2 className="card__title">Memory Match</h2>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
};

export default Game;
