import { useCallback, useState } from "react";
import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";
import Question from "./Question.jsx";

const Quiz = () => {
  const [answerStatus, setAnswerStatus] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerStatus === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerStatus("answered");
      setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerStatus("correct");
        } else {
          setAnswerStatus("wrong");
        }

        setTimeout(() => {
          setAnswerStatus("");
        }, 2000);
      }, 1000);
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
        questiontext={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerStatus={answerStatus}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
