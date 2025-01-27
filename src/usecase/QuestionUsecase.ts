import Answer from "../domain/Answer";
import QuestionFactory from "../domain/factory/QuestionFactory";
import Weapon from "../domain/Weapon";

class QuestionUsecase {
  execute(
    answerWeapon: Weapon,
    questionName: string,
    option?: string,
    comparator?: string
  ): Answer {
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
