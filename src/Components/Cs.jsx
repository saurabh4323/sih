import React, { useState } from "react";

function Cs() {
  const crosswordData = [
    { letter: "M", number: 1, row: 1, col: 1, isClueStart: true },
    { letter: "A", number: null, row: 1, col: 2, isClueStart: false },
    { letter: "D", number: null, row: 1, col: 3, isClueStart: false },
    { letter: "I", number: null, row: 1, col: 4, isClueStart: false },
    { letter: "S", number: null, row: 1, col: 5, isClueStart: false },
    { letter: "O", number: null, row: 1, col: 6, isClueStart: false },
    { letter: "N", number: null, row: 1, col: 7, isClueStart: false },
    { letter: null, number: null, row: 2, col: 1, isClueStart: false },
    { letter: "R", number: 2, row: 2, col: 2, isClueStart: true },
    { letter: null, number: null, row: 2, col: 3, isClueStart: false },
    { letter: null, number: null, row: 2, col: 4, isClueStart: false },
    { letter: null, number: null, row: 2, col: 5, isClueStart: false },
    { letter: null, number: null, row: 2, col: 6, isClueStart: false },
    { letter: null, number: null, row: 2, col: 7, isClueStart: false },
    { letter: "B", number: 3, row: 3, col: 1, isClueStart: true },
    { letter: "I", number: null, row: 3, col: 2, isClueStart: false },
    { letter: "L", number: null, row: 3, col: 3, isClueStart: false },
    { letter: "L", number: null, row: 3, col: 4, isClueStart: false },
    { letter: null, number: null, row: 3, col: 5, isClueStart: false },
    { letter: null, number: null, row: 3, col: 6, isClueStart: false },
    { letter: null, number: null, row: 3, col: 7, isClueStart: false },
    { letter: null, number: null, row: 4, col: 1, isClueStart: false },
    { letter: "G", number: null, row: 4, col: 2, isClueStart: false },
    { letter: null, number: null, row: 4, col: 3, isClueStart: false },
    { letter: null, number: null, row: 4, col: 4, isClueStart: false },
    { letter: null, number: null, row: 4, col: 5, isClueStart: false },
    { letter: null, number: null, row: 4, col: 6, isClueStart: false },
    { letter: null, number: null, row: 4, col: 7, isClueStart: false },
    { letter: "J", number: 4, row: 5, col: 1, isClueStart: true },
    { letter: "U", number: null, row: 5, col: 2, isClueStart: false },
    { letter: "D", number: null, row: 5, col: 3, isClueStart: false },
    { letter: "I", number: null, row: 5, col: 4, isClueStart: false },
    { letter: "C", number: null, row: 5, col: 5, isClueStart: false },
    { letter: "I", number: null, row: 5, col: 6, isClueStart: false },
    { letter: "A", number: null, row: 5, col: 7, isClueStart: false },
    { letter: "L", number: null, row: 5, col: 8, isClueStart: false },
    { letter: null, number: null, row: 6, col: 1, isClueStart: false },
    { letter: "V", number: 5, row: 6, col: 2, isClueStart: true },
    { letter: null, number: null, row: 6, col: 3, isClueStart: false },
    { letter: null, number: null, row: 6, col: 4, isClueStart: false },
    { letter: null, number: null, row: 6, col: 5, isClueStart: false },
    { letter: null, number: null, row: 6, col: 6, isClueStart: false },
    { letter: null, number: null, row: 6, col: 7, isClueStart: false },
    { letter: "L", number: 6, row: 7, col: 1, isClueStart: true },
    { letter: "A", number: null, row: 7, col: 2, isClueStart: false },
    { letter: "W", number: null, row: 7, col: 3, isClueStart: false },
    { letter: null, number: null, row: 7, col: 4, isClueStart: false },
    { letter: null, number: null, row: 7, col: 5, isClueStart: false },
    { letter: null, number: null, row: 7, col: 6, isClueStart: false },
    { letter: null, number: null, row: 7, col: 7, isClueStart: false },
    { letter: null, number: null, row: 8, col: 1, isClueStart: false },
    { letter: "E", number: null, row: 8, col: 2, isClueStart: false },
    { letter: null, number: null, row: 8, col: 3, isClueStart: false },
    { letter: null, number: null, row: 8, col: 4, isClueStart: false },
    { letter: null, number: null, row: 8, col: 5, isClueStart: false },
    { letter: null, number: null, row: 8, col: 6, isClueStart: false },
    { letter: null, number: null, row: 8, col: 7, isClueStart: false },
    { letter: "R", number: 7, row: 9, col: 1, isClueStart: true },
    { letter: "E", number: null, row: 9, col: 2, isClueStart: false },
    { letter: "V", number: null, row: 9, col: 3, isClueStart: false },
    { letter: "I", number: null, row: 9, col: 4, isClueStart: false },
    { letter: "E", number: null, row: 9, col: 5, isClueStart: false },
    { letter: "W", number: null, row: 9, col: 6, isClueStart: false },
  ];

  const [gridState, setGridState] = useState(
    crosswordData.map((cell) => ({
      ...cell,
      userAnswer: "",
    }))
  );

  const handleInputChange = (index, value) => {
    const updatedGridState = [...gridState];
    updatedGridState[index].userAnswer = value.toUpperCase();
    setGridState(updatedGridState);
  };

  const checkAnswers = () => {
    const allCorrect = gridState.every(
      (cell) => cell.userAnswer === cell.letter
    );

    if (allCorrect) {
      alert("Congratulations! All answers are correct!");
    } else {
      alert("Some answers are incorrect. Please try again!");
    }
  };

  const resetPuzzle = () => {
    setGridState(
      crosswordData.map((cell) => ({
        ...cell,
        userAnswer: "",
      }))
    );
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Crossword Puzzle</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 50px)",
          gridTemplateRows: "repeat(9, 50px)",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        {gridState.map((cell, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #000",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: cell.letter ? "#fff" : "#ccc",
            }}
          >
            {cell.isClueStart && (
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "2px",
                  fontSize: "10px",
                  color: "#999",
                }}
              >
                {cell.number}
              </span>
            )}
            {cell.letter ? (
              <input
                type="text"
                maxLength="1"
                value={cell.userAnswer}
                onChange={(e) => handleInputChange(index, e.target.value)}
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  fontSize: "18px",
                  border: "none",
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
      <button onClick={checkAnswers} style={{ marginTop: "20px" }}>
        Check Answers
      </button>
      <button
        onClick={resetPuzzle}
        style={{ marginTop: "10px", marginLeft: "10px" }}
      >
        Reset Puzzle
      </button>
    </div>
  );
}

export default Cs;
