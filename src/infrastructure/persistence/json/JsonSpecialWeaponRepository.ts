import SpecialWeaponRepository from "../../../domain/repository/SpecialWeaponRepository";
import SpecialWeapon from "../../../domain/SpecialWeapon";
import specialWeapons from "../../../../resource/data/SpecialWeapons.json";
import ResultFactory from "../../../domain/factory/ResultFactory";

class JsonSpecialWeaponRepository implements SpecialWeaponRepository {
  findByName(name: string): SpecialWeapon {
    const specialWeapon = specialWeapons.find(
      (specialWeapon) => specialWeapon.name === name
    );
    if (!specialWeapon) {
      throw new Error(`SpecialWeapon ${name} not found`);
    }
    return {
      name: specialWeapon.name,
      hasRButtonAction: ResultFactory.create(specialWeapon.hasRButtonAction),
      hasZRButtonAction: ResultFactory.create(specialWeapon.hasZRButtonAction),
      canOneShot: ResultFactory.create(specialWeapon.canOneShot),
      dealsContinuousDamage: ResultFactory.create(
        specialWeapon.dealsContinuousDamage
      ),
      isAttackType: ResultFactory.create(specialWeapon.isAttackType),
      jumpsToUsePoint: ResultFactory.create(specialWeapon.jumpsToUsePoint),
    };
  }
}

export default JsonSpecialWeaponRepository;
