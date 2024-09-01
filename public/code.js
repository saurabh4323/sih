const quizData = [
  {
    question: "1. What is the full name of B. R. Ambedkar?",
    a: "Bhimrao Ramji Ambedkar",
    b: "Bhimji Rao Ambedkar",
    c: "Babasaheb Ramjirao Ambedkar",
    d: "Baba Ram Ambedkar",
    correct: "a",
  },
  {
    question: "2. What is ‘Mookanayaka’?",
    a: "The name of Ambedkar’s autobiography",
    b: " Biography of a leader who could not speak",
    c: "Ambedkar’s newspaper",
    d: "Ambedkar’s pen-name",
    correct: "c",
  },
  {
    question:
      "3. What portfolio was handled by Dr. Ambedkar in Independent India?",
    a: "Home Ministry",
    b: " Finance Ministry",
    c: " Education Ministry",
    d: " Law Ministry",
    correct: "d",
  },
  {
    question: "4. When did the Constitution of India come into effect?",
    a: " January 26, 1947",
    b: "  January 26, 1948",
    c: " January 26, 1949",
    d: " January 26, 1950",
    correct: "d",
  },
  {
    question:
      "5. Which part of the Indian Constitution deals with Fundamental Rights?",
    a: "  Part I",
    b: "  Part II",
    c: " Part III",
    d: " Part IV",
    correct: "c",
  },
  {
    question: "6. The President of India is elected by which method?",
    a: "  Direct Election",
    b: " Proportional Representation",
    c: " Single Transferable Vote",
    d: " First-Past-The-Post",
    correct: "c",
  },
  {
    question:
      "7. Which Article of the Indian Constitution provides for the abolition of untouchability?",
    a: "  Article 16",
    b: " Article 14",
    c: " Article 15",
    d: " Article 17",
    correct: "d",
  },
  {
    question:
      "8. How many members of the Rajya Sabha are nominated by the President of India?",
    a: "10",
    b: "12",
    c: "14",
    d: "15",
    correct: "b",
  },
  {
    question: "9. The Indian Constitution is considered to be:",
    a: "Rigid",
    b: " Flexible",
    c: "Both rigid and flexible",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "10. Which of the following is the longest written Constitution in the world?",
    a: "Constitution of the United States",
    b: "Constitution of the United Kingdom",
    c: "Constitution of India",
    d: "Constitution of Canada",
    correct: "c",
  },
  {
    question: "11. Who appoints the Chief Justice of India?",
    a: "The Prime Minister",
    b: "The President",
    C: "The Chief Justice of the Supreme Court",
    D: "The Parliament",
    correct: "b",
  },
  {
    question: "12. What is the preamble of the Indian Constitution?",

    a: "An introduction",

    b: "The beginning",

    c: "The preface",

    d: "The prologue",

    correct: "c",
  },
  {
    question: "13. What does Article 21 of the Indian Constitution guarantee?",

    a: " Right to Equality",

    b: "Right to Life and Personal Liberty",

    c: "Right against Exploitation",

    d: "Right to Freedom of Religion",

    correct: "b",
  },
  {
    question:
      "14.  Which constitutional amendment lowered the voting age from 21 to 18?",

    a: " 42nd Amendment",

    b: "44th Amendment",

    c: "61st Amendment",

    d: "73rd Amendment",

    correct: "c",
  },
  {
    question:
      "15.  Which schedule of the Constitution contains the list of languages recognized by the Constitution?",

    a: " First Schedule",

    b: " Second Schedule",

    c: "Eighth Schedule",

    d: "Ninth Schedule",

    correct: "c",
  },
];
const quizData = [
  // Your quiz data as before
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");

// Dynamically create questions and options
quizData.forEach((quizItem, index) => {
  const questionEl = document.createElement("h3");
  questionEl.innerText = quizItem.question;

  const options = document.createElement("ul");

  for (let option in quizItem) {
    if (option !== "question" && option !== "correct") {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="radio" id="${option}${index}" name="question${index}" class="answer" value="${option}" />
        <label for="${option}${index}">${quizItem[option]}</label>
      `;
      options.appendChild(li);
    }
  }

  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(options);
});

// Enable submit button only when all questions are answered
const updateSubmitButtonState = () => {
  let allAnswered = true;
  quizData.forEach((_, index) => {
    const options = document.getElementsByName(`question${index}`);
    if (![...options].some((option) => option.checked)) {
      allAnswered = false;
    }
  });

  submitBtn.disabled = !allAnswered;
};

document.querySelectorAll(".answer").forEach((element) => {
  element.addEventListener("change", updateSubmitButtonState);
});

// Handle form submission
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let score = 0;

  quizData.forEach((quizItem, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    if (selectedOption && selectedOption.value === quizItem.correct) {
      score++;
    }
  });

  quizContainer.innerHTML = `<h3>Your score: ${score} / ${quizData.length}</h3>
                            <p>You have submitted the quiz.</p>`;
});
