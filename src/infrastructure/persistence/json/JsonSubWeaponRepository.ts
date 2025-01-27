import SubWeaponRepository from "../../../domain/repository/SubWeaponRepository";
import subWeapons from "../../../../resource/data/SubWeapons.json";
import SubWeapon from "../../../domain/SubWeapon";
import ResultFactory from "../../../domain/factory/ResultFactory";

class JsonSubWeaponRepository implements SubWeaponRepository {
  findByName(name: string): SubWeapon {
    const subWeapon = subWeapons.find((subWeapon) => subWeapon.name === name);
    if (!subWeapon) {
      throw new Error(`SubWeapon ${name} not found`);
    }
    return {
      name: subWeapon.name,
      inkConsumption: Number(subWeapon.inkConsumption),
      damage: [Number(subWeapon.damage1), Number(subWeapon.damage2)],
      isAttackType: ResultFactory.create(subWeapon.isAttackType),
      canBePlaced: ResultFactory.create(subWeapon.canBePlaced),
      canInk: ResultFactory.create(subWeapon.canInk),
      canMark: ResultFactory.create(subWeapon.canMark),
    };
  }
}

export default JsonSubWeaponRepository;
