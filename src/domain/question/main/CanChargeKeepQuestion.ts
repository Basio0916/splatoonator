import Answer from "../../Answer";
import Weapon from "../../Weapon";
import Question from "../Question";

class CanChargeKeepQuestion extends Question {
  answerWeapon: Weapon;

  constructor(answerWeapon: Weapon) {
    super();
    this.answerWeapon = answerWeapon;
  }

  answer(): Answer {
    return this.answerWeapon.mainWeapon.canChargeKeep;
  }
}

export default CanChargeKeepQuestion;
