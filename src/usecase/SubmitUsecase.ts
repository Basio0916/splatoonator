import Weapon from "../domain/Weapon";

class SubmitUsecase {
  execute(answerWeapon: Weapon, submittedWeaponName: string): boolean {
    return submittedWeaponName === answerWeapon.name;
  }
}

export default SubmitUsecase;
