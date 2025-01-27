import Result from "../../Result";
import Comparator from "../../comparator/Comparator";
import Weapon from "../../Weapon";
import Question from "../Question";

class MainWeaponMaxDamageQuestion extends Question {
  answerWeapon: Weapon;
  targetMaxDamage: number;
  comparator: Comparator;

  constructor(
    answerWeapon: Weapon,
    targetMaxDamage: number,
    comparator: Comparator
  ) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetMaxDamage = targetMaxDamage;
    this.comparator = comparator;
  }

  answer(): Result {
    if (
      this.comparator.compare(
        Math.max(...this.answerWeapon.mainWeapon.damage),
        this.targetMaxDamage
      )
    ) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default MainWeaponMaxDamageQuestion;
