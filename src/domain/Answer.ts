import QuestionAnswer from "./QuestionAnswer";

interface Answer {
  weapon: string;
  isCorrect: boolean;
  questionHistory: QuestionAnswer[];
}

export default Answer;
