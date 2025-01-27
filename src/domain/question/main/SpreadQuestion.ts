import Result from "../../Result";
import Comparator from "../../comparator/Comparator";
import Weapon from "../../Weapon";
import Question from "../Question";

class SpreadQuestion extends Question {
  answerWeapon: Weapon;
  targetSpread: number;
  comparator: Comparator;

  constructor(
    answerWeapon: Weapon,
    targetSpread: number,
    comparator: Comparator
  ) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetSpread = targetSpread;
    this.comparator = comparator;
  }

  answer(): Result {
    let matchCount = 0;
    for (const spread of this.answerWeapon.mainWeapon.spread) {
      if (this.comparator.compare(spread, this.targetSpread)) {
        matchCount++;
      }
    }
    if (matchCount === 0) {
      return Result.NO;
    } else if (matchCount === this.answerWeapon.mainWeapon.spread.length) {
      return Result.YES;
    } else {
      return Result.PARTIAL;
    }
  }
}

export default SpreadQuestion;
