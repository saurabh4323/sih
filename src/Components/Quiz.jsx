import React, { useState } from "react";
import "./gam.css";
import Navbar from "./Navbar";

// Define quiz data directly in the component or import from a JSON file
const quizData = [
  {
    question: "1. What is the full name of B. R. Ambedkar?",
    options: {
      a: "Bhimrao Ramji Ambedkar",
      b: "Bhimji Rao Ambedkar",
      c: "Babasaheb Ramjirao Ambedkar",
      d: "Baba Ram Ambedkar",
    },
    correct: "a",
  },
  {
    question: "2. What is ‘Mookanayaka’?",
    options: {
      a: "The name of Ambedkar’s autobiography",
      b: "Biography of a leader who could not speak",
      c: "Ambedkar’s newspaper",
      d: "Ambedkar’s pen-name",
    },
    correct: "c",
  },
  {
    question:
      "3. What portfolio was handled by Dr. Ambedkar in Independent India?",
    options: {
      a: "Home Ministry",
      b: "Finance Ministry",
      c: "Education Ministry",
      d: "Law Ministry",
    },
    correct: "d",
  },
  {
    question: "4. When did the Constitution of India come into effect?",
    options: {
      a: "January 26, 1947",
      b: "January 26, 1948",
      c: "January 26, 1949",
      d: "January 26, 1950",
    },
    correct: "d",
  },
  {
    question:
      "5. Which part of the Indian Constitution deals with Fundamental Rights?",
    options: {
      a: "Part I",
      b: "Part II",
      c: "Part III",
      d: "Part IV",
    },
    correct: "c",
  },
  {
    question: "6. The President of India is elected by which method?",
    options: {
      a: "Direct Election",
      b: "Proportional Representation",
      c: "Single Transferable Vote",
      d: "First-Past-The-Post",
    },
    correct: "c",
  },
  {
    question:
      "7. Which Article of the Indian Constitution provides for the abolition of untouchability?",
    options: {
      a: "Article 16",
      b: "Article 14",
      c: "Article 15",
      d: "Article 17",
    },
    correct: "d",
  },
  {
    question:
      "8. How many members of the Rajya Sabha are nominated by the President of India?",
    options: {
      a: "10",
      b: "12",
      c: "14",
      d: "15",
    },
    correct: "b",
  },
  {
    question: "9. The Indian Constitution is considered to be:",
    options: {
      a: "Rigid",
      b: "Flexible",
      c: "Both rigid and flexible",
      d: "None of the above",
    },
    correct: "c",
  },
  {
    question:
      "10. Which of the following is the longest written Constitution in the world?",
    options: {
      a: "Constitution of the United States",
      b: "Constitution of the United Kingdom",
      c: "Constitution of India",
      d: "Constitution of Canada",
    },
    correct: "c",
  },
  {
    question: "11. Who appoints the Chief Justice of India?",
    options: {
      a: "The Prime Minister",
      b: "The President",
      c: "The Chief Justice of the Supreme Court",
      d: "The Parliament",
    },
    correct: "b",
  },
  {
    question: "12. What is the preamble of the Indian Constitution?",
    options: {
      a: "An introduction",
      b: "The beginning",
      c: "The preface",
      d: "The prologue",
    },
    correct: "c",
  },
  {
    question: "13. What does Article 21 of the Indian Constitution guarantee?",
    options: {
      a: "Right to Equality",
      b: "Right to Life and Personal Liberty",
      c: "Right against Exploitation",
      d: "Right to Freedom of Religion",
    },
    correct: "b",
  },
  {
    question:
      "14. Which constitutional amendment lowered the voting age from 21 to 18?",
    options: {
      a: "42nd Amendment",
      b: "44th Amendment",
      c: "61st Amendment",
      d: "73rd Amendment",
    },
    correct: "c",
  },
  {
    question:
      "15. Which schedule of the Constitution contains the list of languages recognized by the Constitution?",
    options: {
      a: "First Schedule",
      b: "Second Schedule",
      c: "Eighth Schedule",
      d: "Ninth Schedule",
    },
    correct: "c",
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      if (answers[index] === question.correct) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <div className="hkl">
      <div className="bodyh">
        <div className="quiz-container" id="quiz">
          {isSubmitted ? (
            <div>
              <h3>
                Your score: {calculateScore()} / {quizData.length}
              </h3>
              <p>You have submitted the quiz.</p>
            </div>
          ) : (
            <div>
              {quizData.map((quizItem, index) => (
                <div key={index}>
                  <h3>{quizItem.question}</h3>
                  <hul>
                    {Object.entries(quizItem.options).map(([key, value]) => (
                      <hli key={key}>
                        <input
                          type="radio"
                          id={`${key}${index}`}
                          name={`question${index}`}
                          value={key}
                          checked={answers[index] === key}
                          onChange={() => handleOptionChange(index, key)}
                        />
                        <label htmlFor={`${key}${index}`}>{value}</label>
                      </hli>
                    ))}
                  </hul>
                </div>
              ))}
              <button
                className="buttonk"
                id="submit"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== quizData.length}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
