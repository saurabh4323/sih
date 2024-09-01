// Games.jsx
import React from "react";
import "./game.css"; // Make sure this path is correct based on your project structure
import { Link } from "react-router-dom";

const Game = () => {
  return (
    <div>
      {/* <p className="games">Games</p> */}
      <div className="containerx">
        {/* Video element */}
        <video
          style={{ marginTop: "500px" }} // Inline styles in JSX use camelCase
          autoPlay
          loop
          muted
          playsInline
          className="back-video"
        >
          <source
            src="assets/img/153957-806571952_small.mp4"
            type="video/mp4"
          />
          {/* Make sure the path to your video file is correct */}
        </video>

        {/* First set of cards */}
        <div className="card__container">
          <Link to={"/crossword"}>
            <article className="card__article">
              <img src="k.jpg" alt="Crossword" className="card__img" />

              <div className="card__data">
                <span className="card__description">
                  Crossword game on Indian Constitution.
                </span>
                <h2 className="card__title">Constitution Quest</h2>
              </div>
            </article>
          </Link>
          <Link to={"/quiz"}>
            <article className="card__article">
              <img src="trivia.jpg" alt="Trivia" className="card__img" />
              <div className="card__data">
                <span className="card__description">
                  Explore Parliament through engaging questions
                </span>
                <h2 className="card__title">Parliament Trivia</h2>
              </div>
            </article>
          </Link>
        </div>
      </div>

      <div className="containerh">
        {/* Second set of cards */}
        <div className="card__container">
          <article className="card__article">
            <img src="s.jpg" alt="Build Government" className="card__img" />
            <div className="card__data">
              <span className="card__description">
                Strategize, build, and govern nations.
              </span>
              <h2 className="card__title">Build your Government</h2>
            </div>
          </article>

          <article className="card__article">
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
          </article>
        </div>
      </div>
    </div>
  );
};

export default Game;
