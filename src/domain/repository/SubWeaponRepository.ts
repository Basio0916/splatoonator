import SubWeapon from "../SubWeapon";

interface SubWeaponRepository {
  findByName(name: string): SubWeapon;
}

export default SubWeaponRepository;
