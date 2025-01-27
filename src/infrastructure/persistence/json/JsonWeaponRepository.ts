// import { inject, injectable } from "inversify";
// import "reflect-metadata";
import type WeaponRepository from "../../../domain/repository/WeaponRepository";
import type Weapon from "../../../domain/Weapon";
import weapons from "../../../../resource/data/Weapons.json";
import type MainWeaponRepository from "../../../domain/repository/MainWeaponRepository";
import type SubWeaponRepository from "../../../domain/repository/SubWeaponRepository";
import type SpecialWeaponRepository from "../../../domain/repository/SpecialWeaponRepository";
// import TYPES from "../../../type/types";

//@injectable()
class JsonWeaponRepository implements WeaponRepository {
  mainWeaponRepository: MainWeaponRepository;
  subWeaponRepository: SubWeaponRepository;
  specialWeaponRepository: SpecialWeaponRepository;

  constructor(
    //@inject(TYPES.MainWeaponRepository)
    mainWeaponRepository: MainWeaponRepository,
    //@inject(TYPES.SubWeaponRepository)
    subWeaponRepository: SubWeaponRepository,
    //@inject(TYPES.SpecialWeaponRepository)
    specialWeaponRepository: SpecialWeaponRepository
  ) {
    this.mainWeaponRepository = mainWeaponRepository;
    this.subWeaponRepository = subWeaponRepository;
    this.specialWeaponRepository = specialWeaponRepository;
  }

  findByName(name: string): Weapon {
    const weapon = weapons.find((weapon) => weapon.name === name);
    if (!weapon) {
      throw new Error(`Weapon ${name} not found`);
    }
    return {
      name: weapon.name,
      mainWeapon: this.mainWeaponRepository.findByName(weapon.mainWeapon),
      subWeapon: this.subWeaponRepository.findByName(weapon.subWeapon),
      specialWeapon: this.specialWeaponRepository.findByName(
        weapon.specialWeapon
      ),
      specialPoint: Number(weapon.specialPoint),
    };
  }

  findRandom(): Weapon {
    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
    return {
      name: weapon.name,
      mainWeapon: this.mainWeaponRepository.findByName(weapon.mainWeapon),
      subWeapon: this.subWeaponRepository.findByName(weapon.subWeapon),
      specialWeapon: this.specialWeaponRepository.findByName(
        weapon.specialWeapon
      ),
      specialPoint: Number(weapon.specialPoint),
    };
  }

  findAllWeaponNames(): string[] {
    return weapons.map((weapon) => weapon.name);
  }
}

export default JsonWeaponRepository;
