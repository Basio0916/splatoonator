import Result from "../../Result";
import Weapon from "../../Weapon";
import Question from "../Question";

class JumpsToUsePointQuestion extends Question {
  answerWeapon: Weapon;

  constructor(answerWeapon: Weapon) {
    super();
    this.answerWeapon = answerWeapon;
  }

  answer(): Result {
    return this.answerWeapon.specialWeapon.jumpsToUsePoint;
  }
}

export default JumpsToUsePointQuestion;
