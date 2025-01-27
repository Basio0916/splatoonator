import MainWeapon from "../MainWeapon";

interface MainWeaponRepository {
  findByName(name: string): MainWeapon;
}

export default MainWeaponRepository;
