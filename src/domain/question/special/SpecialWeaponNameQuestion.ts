import Answer from "../../Answer";
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

  answer(): Answer {
    if (this.answerWeapon.specialWeapon.name === this.targetSpecialWeaponName) {
      return Answer.YES;
    } else {
      return Answer.NO;
    }
  }
}

export default SpecialWeaponNameQuestion;
