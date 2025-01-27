import Result from "../../Result";
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

  answer(): Result {
    if (
      this.comparator.compare(
        this.answerWeapon.mainWeapon.weight,
        this.targetWeight
      )
    ) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default WeightQuestion;
