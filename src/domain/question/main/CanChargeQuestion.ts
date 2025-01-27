import Result from "../../Result";
import Weapon from "../../Weapon";
import Question from "../Question";

class CanChargeQuestion extends Question {
  answerWeapon: Weapon;

  constructor(answerWeapon: Weapon) {
    super();
    this.answerWeapon = answerWeapon;
  }

  answer(): Result {
    return this.answerWeapon.mainWeapon.canCharge;
  }
}

export default CanChargeQuestion;
