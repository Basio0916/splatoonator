import Result from "../../Result";
import Comparator from "../../comparator/Comparator";
import Weapon from "../../Weapon";
import Question from "../Question";

class RangeQuestion extends Question {
  answerWeapon: Weapon;
  targetRange: number;
  comparator: Comparator;

  constructor(
    answerWeapon: Weapon,
    targetRange: number,
    comparator: Comparator
  ) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetRange = targetRange;
    this.comparator = comparator;
  }

  answer(): Result {
    let matchCount = 0;
    for (const range of this.answerWeapon.mainWeapon.range) {
      if (this.comparator.compare(range, this.targetRange)) {
        matchCount++;
      }
    }
    if (matchCount === 0) {
      return Result.NO;
    } else if (matchCount === this.answerWeapon.mainWeapon.range.length) {
      return Result.YES;
    } else {
      return Result.PARTIAL;
    }
  }
}

export default RangeQuestion;
