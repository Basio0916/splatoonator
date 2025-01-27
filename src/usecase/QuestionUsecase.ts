import Result from "../domain/Result";
import QuestionFactory from "../domain/factory/QuestionFactory";
import Weapon from "../domain/Weapon";

class QuestionUsecase {
  execute(
    answerWeapon: Weapon,
    questionName: string,
    option?: string,
    comparator?: string
  ): Result {
    const question = QuestionFactory.create(
      questionName,
      answerWeapon,
      option,
      comparator
    );
    return question.answer();
  }
}

export default QuestionUsecase;
