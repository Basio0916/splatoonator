import Answer from "../../Answer";
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

  answer(): Answer {
    if (this.answerWeapon.mainWeapon.name === this.targetMainWeaponName) {
      return Answer.YES;
    } else {
      return Answer.NO;
    }
  }
}

export default MainWeaponNameQuestion;
