import Result from "../../Result";
import Weapon from "../../Weapon";
import Question from "../Question";

class SubWeaponNameQuestion extends Question {
  answerWeapon: Weapon;
  targetSubWeaponName: string;

  constructor(answerWeapon: Weapon, targetSubWeaponName: string) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetSubWeaponName = targetSubWeaponName;
  }

  answer(): Result {
    if (this.answerWeapon.subWeapon.name === this.targetSubWeaponName) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default SubWeaponNameQuestion;
