import WeaponRepository from "../domain/repository/WeaponRepository";
import Weapon from "../domain/Weapon";

class GameStartUsecase {
  private weaponRepository: WeaponRepository;

  constructor(weaponRepository: WeaponRepository) {
    this.weaponRepository = weaponRepository;
  }

  execute(): Weapon {
    return this.weaponRepository.findRandom();
  }
}

export default GameStartUsecase;
