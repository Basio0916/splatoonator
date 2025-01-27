// import { inject, injectable } from "inversify";
// import "reflect-metadata";
import type WeaponRepository from "../domain/repository/WeaponRepository";
import Weapon from "../domain/Weapon";
// import TYPES from "../type/types";

//@injectable()
class GameStartUsecase {
  private weaponRepository: WeaponRepository;

  constructor(
    //@inject(TYPES.WeaponRepository)
    weaponRepository: WeaponRepository
  ) {
    this.weaponRepository = weaponRepository;
  }

  execute(): Weapon {
    return this.weaponRepository.findRandom();
  }
}

export default GameStartUsecase;
