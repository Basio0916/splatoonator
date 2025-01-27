import Weapon from "../domain/Weapon";

class GetAnswerUsecase {
  execute(answerWeapon: Weapon): string {
    return answerWeapon.name;
  }
}

export default GetAnswerUsecase;
