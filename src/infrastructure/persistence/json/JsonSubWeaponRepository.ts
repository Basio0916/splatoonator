import SubWeaponRepository from "../../../domain/repository/SubWeaponRepository";
import subWeapons from "../../../../resource/data/SubWeapons.json";
import SubWeapon from "../../../domain/SubWeapon";
import AnswerFactory from "../../../domain/factory/AnswerFactory";

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
      isAttackType: AnswerFactory.create(subWeapon.isAttackType),
      canBePlaced: AnswerFactory.create(subWeapon.canBePlaced),
      canInk: AnswerFactory.create(subWeapon.canInk),
      canMark: AnswerFactory.create(subWeapon.canMark),
    };
  }
}

export default JsonSubWeaponRepository;
