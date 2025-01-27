import Result from "../../Result";
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

  answer(): Result {
    if (this.answerWeapon.mainWeapon.weaponCategory === this.weaponCategory) {
      return Result.YES;
    } else {
      return Result.NO;
    }
  }
}

export default WeaponCategoryQuestion;
