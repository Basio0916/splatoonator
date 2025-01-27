import WeaponRepository from "../../../domain/repository/WeaponRepository";
import Weapon from "../../../domain/Weapon";
import weapons from "../../../../resource/data/Weapons.json";
import MainWeaponRepository from "../../../domain/repository/MainWeaponRepository";
import SubWeaponRepository from "../../../domain/repository/SubWeaponRepository";
import SpecialWeaponRepository from "../../../domain/repository/SpecialWeaponRepository";

class JsonWeaponRepository implements WeaponRepository {
  mainWeaponRepository: MainWeaponRepository;
  subWeaponRepository: SubWeaponRepository;
  specialWeaponRepository: SpecialWeaponRepository;

  constructor(
    mainWeaponRepository: MainWeaponRepository,
    subWeaponRepository: SubWeaponRepository,
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
