import Answer from "../../Answer";
import Comparator from "../../comparator/Comparator";
import Weapon from "../../Weapon";
import Question from "../Question";

class WeightQuestion extends Question {
  answerWeapon: Weapon;
  targetWeight: number;
  comparator: Comparator;

  constructor(
    answerWeapon: Weapon,
    targetWeight: number,
    comparator: Comparator
  ) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetWeight = targetWeight;
    this.comparator = comparator;
  }

  answer(): Answer {
    if (
      this.comparator.compare(
        this.answerWeapon.mainWeapon.weight,
        this.targetWeight
      )
    ) {
      return Answer.YES;
    } else {
      return Answer.NO;
    }
  }
}

export default WeightQuestion;
