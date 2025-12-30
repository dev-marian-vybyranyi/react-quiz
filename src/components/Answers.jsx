import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerStatus, onSelectAnswer }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerStatus === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerStatus === "correct" || answerStatus === "wrong") &&
          isSelected
        ) {
          cssClasses = answerStatus;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClasses}
              disabled={answerStatus !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
