import React, { useState, useEffect } from "react";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f8ff", // Light blue background
        fontFamily: "'Arial', sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "10px", color: "#333" }}>
          Constitutional Matchmaker
        </h1>
        <div
          style={{
            fontSize: "1.2rem",
            marginBottom: "20px",
            color: "#666",
          }}
        >
          Time: {timeLeft}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                perspective: "1000px",
              }}
              onClick={() => flipCard(index)}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform:
                    flippedCards.some((fc) => fc.index === index) || gameOver
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  backgroundColor: "#007bff",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "#fff",
                    borderRadius: "10px",
                    backgroundColor: "#007bff",
                  }}
                >
                  ?
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    color: "#333",
                    transform: "rotateY(180deg)",
                    backgroundColor: "#ffffff",
                    border: "2px solid #007bff",
                    borderRadius: "10px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {card.value}
                </div>
              </div>
            </div>
          ))}
        </div>
        {gameOver && (
          <div style={{ marginTop: "20px", fontSize: "1.2rem", color: "#333" }}>
            {matchedPairs === cards.length / 2
              ? "Congratulations! You've matched all pairs."
              : "Time's up! Game Over."}
          </div>
        )}
        {gameOver && (
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={restartGame}
          >
            Restart Game
          </button>
        )}
      </div>
    </div>
  );
};

export default Guess;
