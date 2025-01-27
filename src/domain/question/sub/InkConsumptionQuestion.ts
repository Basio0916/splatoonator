import Result from "../../Result";
import Comparator from "../../comparator/Comparator";
import Weapon from "../../Weapon";
import Question from "../Question";

class InkConsumptionQuestion extends Question {
  answerWeapon: Weapon;
  targetInkConsumption: number;
  comparator: Comparator;

  constructor(
    answerWeapon: Weapon,
    targetInkConsumption: number,
    comparator: Comparator
  ) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetInkConsumption = targetInkConsumption;
    this.comparator = comparator;
  }

  answer(): Result {
    if (
      this.comparator.compare(
        this.answerWeapon.subWeapon.inkConsumption,
        this.targetInkConsumption
      )
    ) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default InkConsumptionQuestion;
