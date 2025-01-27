import Result from "../../Result";
import Weapon from "../../Weapon";
import Question from "../Question";

class HasDirectHitSoundQuestion extends Question {
  answerWeapon: Weapon;

  constructor(answerWeapon: Weapon) {
    super();
    this.answerWeapon = answerWeapon;
  }

  answer(): Result {
    return this.answerWeapon.mainWeapon.hasDirectHitSound;
  }
}

export default HasDirectHitSoundQuestion;
