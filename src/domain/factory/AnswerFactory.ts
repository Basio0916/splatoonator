import Answer from "../Answer";

class AnswerFactory {
  static create(value: string): Answer {
    switch (value.toUpperCase()) {
      case "YES":
        return Answer.YES;
      case "NO":
        return Answer.NO;
      case "PARTIAL":
        return Answer.PARTIAL;
      default:
        throw new Error(`Invalid Answer value: ${value}`);
    }
  }
}

export default AnswerFactory;
