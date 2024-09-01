import React, { useState } from "react";
import "./cs.css";

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
    <div className="bodyp">
      <div className="App">
        <h1>Constitutional Crossword Puzzle</h1>
        <div className="crossword-grid">
          {gridState.map((cell, index) => (
            <div
              key={`${cell.row}-${cell.col}`}
              className={`crossword-cell ${
                cell.letter === null ? "black-cell" : ""
              }`}
            >
              {cell.letter !== null && (
                <>
                  {cell.isClueStart && (
                    <div className="clue-number">{cell.number}</div>
                  )}
                  <input
                    type="text"
                    maxLength="1"
                    value={cell.userAnswer}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <button className="buttonk" onClick={checkAnswers}>
          Check Answers
        </button>
        <button className="buttonk" onClick={resetPuzzle}>
          Reset Puzzle
        </button>
      </div>
    </div>
  );
}

export default Cs;
