import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

const Question = ({
  questiontext,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerStatus,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questiontext}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerStatus={answerStatus}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
