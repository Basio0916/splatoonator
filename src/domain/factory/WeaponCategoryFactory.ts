import WeaponCategory from "../WeaponCategory";

class WeaponCategoryFactory {
  static create(weaponCategory: string): WeaponCategory {
    switch (weaponCategory) {
      case "シューター":
        return WeaponCategory.Shooter;
      case "ローラー":
        return WeaponCategory.Roller;
      case "チャージャー":
        return WeaponCategory.Charger;
      case "ブラスター":
        return WeaponCategory.Blaster;
      case "スロッシャー":
        return WeaponCategory.Slosher;
      case "スピナー":
        return WeaponCategory.Splatling;
      case "シェルター":
        return WeaponCategory.Brella;
      case "マニューバー":
        return WeaponCategory.Dualies;
      case "フデ":
        return WeaponCategory.Brush;
      case "ストリンガー":
        return WeaponCategory.Stringer;
      case "ワイパー":
        return WeaponCategory.Splatana;
      default:
        throw new Error(`Invalid WeaponCategory value: ${weaponCategory}`);
    }
  }
}

export default WeaponCategoryFactory;
