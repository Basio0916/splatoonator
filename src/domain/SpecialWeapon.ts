import Result from "./Result";

interface SpecialWeapon {
  name: string;
  hasZRButtonAction: Result;
  hasRButtonAction: Result;
  canOneShot: Result;
  dealsContinuousDamage: Result;
  isAttackType: Result;
  jumpsToUsePoint: Result;
}

export default SpecialWeapon;
