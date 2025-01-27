import Answer from "../../Answer";
import Weapon from "../../Weapon";
import Question from "../Question";

class CanOneShotQuestion extends Question {
  answerWeapon: Weapon;

  constructor(answerWeapon: Weapon) {
    super();
    this.answerWeapon = answerWeapon;
  }

  answer(): Answer {
    return this.answerWeapon.specialWeapon.canOneShot;
  }
}

export default CanOneShotQuestion;
