import Result from "../../Result";
import Weapon from "../../Weapon";
import Question from "../Question";

class SpecialWeaponNameQuestion extends Question {
  answerWeapon: Weapon;
  targetSpecialWeaponName: string;

  constructor(answerWeapon: Weapon, targetSpecialWeaponName: string) {
    super();
    this.answerWeapon = answerWeapon;
    this.targetSpecialWeaponName = targetSpecialWeaponName;
  }

  answer(): Result {
    if (this.answerWeapon.specialWeapon.name === this.targetSpecialWeaponName) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default SpecialWeaponNameQuestion;
