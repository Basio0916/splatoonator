import Weapon from "../Weapon";

interface WeaponRepository {
  findByName(name: string): Weapon;

  findRandom(): Weapon;

  findAllWeaponNames(): string[];
}

export default WeaponRepository;
