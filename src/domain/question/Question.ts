import Result from "../Result";

abstract class Question {
  abstract answer(): Result;
}

export default Question;
