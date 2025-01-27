import MainWeapon from "../../../domain/MainWeapon";
import MainWeaponRepository from "../../../domain/repository/MainWeaponRepository";
import mainWeapons from "../../../../resource/data/mainWeapons.json";
import WeaponCategoryFactory from "../../../domain/factory/WeaponCategoryFactory";
import WeightFactory from "../../../domain/factory/WeightFactory";
import ResultFactory from "../../../domain/factory/ResultFactory";

class JsonMainWeaponRepository implements MainWeaponRepository {
  findByName(name: string): MainWeapon {
    const mainWeapon = mainWeapons.find(
      (mainWeapon) => mainWeapon.name === name
    );
    if (!mainWeapon) {
      throw new Error(`MainWeapon ${name} not found`);
    }
    return {
      name: mainWeapon.name,
      weaponCategory: WeaponCategoryFactory.create(mainWeapon.weaponCategory),
      range: [Number(mainWeapon.range1), Number(mainWeapon.range2)],
      damage: [
        Number(mainWeapon.damage1),
        Number(mainWeapon.damage2),
        Number(mainWeapon.damage3),
        Number(mainWeapon.damage4),
      ],
      firingInterval: [
        Number(mainWeapon.firingInterval1),
        Number(mainWeapon.firingInterval2),
      ],
      spread: [Number(mainWeapon.spread1), Number(mainWeapon.spread2)],
      weight: WeightFactory.create(mainWeapon.weight),
      canRapidFire: ResultFactory.create(mainWeapon.canRapidFire),
      canCharge: ResultFactory.create(mainWeapon.canCharge),
      isExplosive: ResultFactory.create(mainWeapon.isExplosive),
      canRollingOrBrushing: ResultFactory.create(
        mainWeapon.canRollingOrBrushing
      ),
      canChargeKeep: ResultFactory.create(mainWeapon.canChargeKeep),
      dodgeRollCount: Number(mainWeapon.dodgeRollCount),
      hasDirectHitSound: ResultFactory.create(mainWeapon.hasDirectHitSound),
    };
  }
}

export default JsonMainWeaponRepository;
