import Answer from "../../Answer";
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

  answer(): Answer {
    if (this.answerWeapon.subWeapon.name === this.targetSubWeaponName) {
      return Answer.YES;
    } else {
      return Answer.NO;
    }
  }
}

export default SubWeaponNameQuestion;
