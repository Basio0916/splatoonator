import Result from "../../Result";
import Weapon from "../../Weapon";
import Question from "../Question";

class MainWeaponNameQuestion extends Question {
  answerWeapon: Weapon;
  targetMainWeaponName: string;

  constructor(answerWeapon: Weapon, targetMainWeaponName: string) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetMainWeaponName = targetMainWeaponName;
  }

  answer(): Result {
    if (this.answerWeapon.mainWeapon.name === this.targetMainWeaponName) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default MainWeaponNameQuestion;
