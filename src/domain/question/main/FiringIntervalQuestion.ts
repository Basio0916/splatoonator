import Result from "../../Result";
import Comparator from "../../comparator/Comparator";
import Weapon from "../../Weapon";
import Question from "../Question";

class FiringIntervalQuestion extends Question {
  answerWeapon: Weapon;
  targetFiringInterval: number;
  comparator: Comparator;

  constructor(
    answerWeapon: Weapon,
    targetFiringInterval: number,
    comparator: Comparator
  ) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetFiringInterval = targetFiringInterval;
    this.comparator = comparator;
  }

  answer(): Result {
    if (
      this.comparator.compare(
        this.answerWeapon.mainWeapon.firingInterval,
        this.targetFiringInterval
      )
    ) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default FiringIntervalQuestion;
