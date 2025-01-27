import Result from "../../Result";
import Weapon from "../../Weapon";
import Question from "../Question";

class IsExplosiveQuestion extends Question {
  answerWeapon: Weapon;

  constructor(answerWeapon: Weapon) {
    super();
    this.answerWeapon = answerWeapon;
  }
  answer(): Result {
    return this.answerWeapon.mainWeapon.isExplosive;
  }
}

export default IsExplosiveQuestion;
