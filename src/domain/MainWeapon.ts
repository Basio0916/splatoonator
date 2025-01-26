import WeaponCategory from './WeaponCategory';
import Answer from './Answer';
import Weight from './Weight';

interface MainWeapon{
  name: string
  weaponCategory: WeaponCategory
  range: number[]
  damage: number[]
  firingInterval: number[]
  spread: number[]
  weight: Weight
  canRapidFire: Answer
  canCharge: Answer
  isExplosive: Answer
}

export default MainWeapon