import MainWeapon from "./MainWeapon"
import SubWeapon from "./SubWeapon"
import SpecialWeapon from "./SpecialWeapon"

interface Weapon{
  name: string
  mainWeapon: MainWeapon
  subWeapon: SubWeapon
  specialWeapon: SpecialWeapon
  specialPoint: number
}

export default Weapon