import SpecialWeapon from "../SpecialWeapon";

interface SpecialWeaponRepository {
  findByName(name: string): SpecialWeapon;
}

export default SpecialWeaponRepository;
