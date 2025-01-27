import Answer from "../Answer";

abstract class Question {
  abstract answer(): Answer;
}

export default Question;
