import WeaponCategory from "./WeaponCategory";
import Result from "./Result";
import Weight from "./Weight";

interface MainWeapon {
  name: string;
  weaponCategory: WeaponCategory;
  range: number[];
  damage: number[];
  firingInterval: number[];
  spread: number[];
  weight: Weight;
  canRapidFire: Result;
  canCharge: Result;
  isExplosive: Result;
  canRollingOrBrushing: Result;
  canChargeKeep: Result;
  dodgeRollCount: number;
  hasDirectHitSound: Result;
}

export default MainWeapon;
