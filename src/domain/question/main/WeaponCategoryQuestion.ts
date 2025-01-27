import Answer from "../../Answer";
import Weapon from "../../Weapon";
import WeaponCategory from "../../WeaponCategory";
import Question from "../Question";

class WeaponCategoryQuestion extends Question {
  answerWeapon: Weapon;
  weaponCategory: WeaponCategory;

  constructor(answerWeapon: Weapon, weaponCategory: WeaponCategory) {
    super();
    this.answerWeapon = answerWeapon;
    this.weaponCategory = weaponCategory;
  }

  answer(): Answer {
    if (this.answerWeapon.mainWeapon.weaponCategory === this.weaponCategory) {
      return Answer.YES;
    } else {
      return Answer.NO;
    }
  }
}

export default WeaponCategoryQuestion;
