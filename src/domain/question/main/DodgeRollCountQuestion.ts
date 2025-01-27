import Result from "../../Result";
import Comparator from "../../comparator/Comparator";
import Weapon from "../../Weapon";
import Question from "../Question";

class DodgeRollCountQuestion extends Question {
  answerWeapon: Weapon;
  targetDodgeRollCount: number;
  comparator: Comparator;

  constructor(
    answerWeapon: Weapon,
    targetDodgeRollCount: number,
    comparator: Comparator
  ) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetDodgeRollCount = targetDodgeRollCount;
    this.comparator = comparator;
  }

  answer(): Result {
    if (
      this.comparator.compare(
        this.answerWeapon.mainWeapon.dodgeRollCount,
        this.targetDodgeRollCount
      )
    ) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default DodgeRollCountQuestion;
