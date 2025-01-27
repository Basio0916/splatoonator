import Answer from "../../Answer";
import Weapon from "../../Weapon";
import Question from "../Question";

class SpecialWeaponIsAttackTypeQuestion extends Question {
  answerWeapon: Weapon;

  constructor(answerWeapon: Weapon) {
    super();
    this.answerWeapon = answerWeapon;
  }

  answer(): Answer {
    return this.answerWeapon.specialWeapon.isAttackType;
  }
}

export default SpecialWeaponIsAttackTypeQuestion;
