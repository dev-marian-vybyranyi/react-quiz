import { useCallback, useState } from "react";
import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";
import Question from "./Question.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (activeQuestionIndex >= QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Quiz Complete" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
