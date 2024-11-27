import React, { useState } from 'react'

const questions = [
  {
    question: "what is the sum of 5+1?",
    options: ["2", "5", "6", "8"],
    answer: "6",
  },
  {
    question: "Which programing language is used for web development?",
    options: ["c++", "JS", "Java", "Python"],
    answer: "JS",
  },
  {
    question: "what is the capital of India?",
    options: ["Delhi", "SriLanka", "MP", "UP"],
    answer: "Delhi",
  },
]

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


const handleAnswerOptionClick=(selectedOption)=>{
  if(selectedOption ===questions[currentQuestion].answer){
    setScore(score+1);
  }
  const nextQuestion = currentQuestion +1;
  if(nextQuestion<questions.length){
    setCurrentQuestion(nextQuestion);
  }else{
    setShowScore(true);
  }
};

  return (
    <div>
      <h1>Quiz App</h1>
      {showScore ?(
        <div>
          <h2> Your Score{score} out of {questions.length}</h2>
        </div>
      ):(
      <div>
        <h2>
          Question{currentQuestion+1}/{questions.length}
        </h2>
        <p>
          {questions[currentQuestion].question}
        </p>
        <div>
          {questions[currentQuestion].options.map((option)=>(
            <button 
            key={option} 
            onClick={()=>
              handleAnswerOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}
function App() {
  return(
    <div>
      <QuizApp />
    </div>
  );
  }

export default App