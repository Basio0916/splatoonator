import Result from "./Result";

interface SubWeapon {
  name: string;
  inkConsumption: number;
  damage: number[];
  isAttackType: Result;
  canBePlaced: Result;
  canInk: Result;
  canMark: Result;
}

export default SubWeapon;
