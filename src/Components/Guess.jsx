import React, { useState, useEffect } from "react";
import "./guess.css"; // Assuming you will create a CSS file for styling

const Guess = () => {
  const articlesAndUses = [
    { article: "Article 1", use: "Freedom of Speech" },
    { article: "Article 2", use: "Right to Bear Arms" },
    { article: "Article 3", use: "Freedom of Religion" },
    { article: "Article 4", use: "Due Process of Law" },
    { article: "Article 5", use: "Equal Protection Under the Law" },
    { article: "Article 6", use: "Right to Privacy" },
    { article: "Article 7", use: "Voting Rights" },
    { article: "Article 8", use: "Right to a Fair Trial" },
    { article: "Article 9", use: "Protection from Unreasonable Searches" },
    { article: "Article 10", use: "Freedom from Cruel and Unusual Punishment" },
  ];

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timer, setTimer] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      setGameOver(true);
    }
  }, [timeLeft]);

  const initializeGame = () => {
    let cardData = [];
    articlesAndUses.forEach(({ article, use }) => {
      cardData.push({ type: "article", value: article, matchValue: use });
      cardData.push({ type: "use", value: use, matchValue: article });
    });
    shuffleCards(cardData);
    startTimer();
  };

  const shuffleCards = (cardData) => {
    const shuffled = [...cardData].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    setTimer(interval);
  };

  const flipCard = (index) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.some((card) => card.index === index)
    ) {
      const newFlippedCards = [
        ...flippedCards,
        { index, matchValue: cards[index].matchValue },
      ];
      setFlippedCards(newFlippedCards);
      if (newFlippedCards.length === 2) {
        checkMatch(newFlippedCards);
      }
    }
  };

  const checkMatch = (flippedCards) => {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.matchValue === secondCard.matchValue) {
      setMatchedPairs((prev) => prev + 1);
      setFlippedCards([]);
      if (matchedPairs + 1 === cards.length / 2) {
        clearInterval(timer);
        setGameOver(true);
      }
    } else {
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const restartGame = () => {
    clearInterval(timer);
    setTimeLeft(60);
    setMatchedPairs(0);
    setFlippedCards([]);
    setGameOver(false);
    initializeGame();
  };

  return (
    <div className="guessa">
      <div className="game-containerk">
        <h1 className="op">Constitutional Matchmaker</h1>
        <div className="timer">Time: {timeLeft}</div>
        <div className="cardk-containerk">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${
                flippedCards.some((fc) => fc.index === index) ? "flipped" : ""
              } ${gameOver ? "matched" : ""}`}
              onClick={() => flipCard(index)}
            >
              <div className="cardk-inner">
                <div className="cardk-front">?</div>
                <div className="cardk-back">{card.value}</div>
              </div>
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="result">
            {matchedPairs === cards.length / 2
              ? "Congratulations! You've matched all pairs."
              : "Time's up! Game Over."}
          </div>
        )}
        {gameOver && (
          <button className="buttonk" onClick={restartGame}>
            Restart Game
          </button>
        )}
      </div>
    </div>
  );
};

export default Guess;
