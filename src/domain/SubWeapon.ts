import Answer from "./Answer";

interface SubWeapon {
  name: string;
  inkConsumption: number;
  damage: number[];
  isAttackType: Answer;
  canBePlaced: Answer;
  canInk: Answer;
  canMark: Answer;
}

export default SubWeapon;
