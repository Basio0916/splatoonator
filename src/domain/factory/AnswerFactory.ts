import Result from "../Result";

class AnswerFactory {
  static create(value: string): Result {
    switch (value.toUpperCase()) {
      case "YES":
        return Result.YES;
      case "NO":
        return Result.NO;
      case "PARTIAL":
        return Result.PARTIAL;
      default:
        throw new Error(`Invalid Answer value: ${value}`);
    }
  }
}

export default AnswerFactory;
