import CanChargeKeepQuestion from "../question/main/CanChargeKeepQuestion";
import CanChargeQuestion from "../question/main/CanChargeQuestion";
import CanRapidFireQuestion from "../question/main/CanRapidFireQuestion";
import CanRollingOrBrushingQuestion from "../question/main/CanRollingOrBrushingQuestion";
import DodgeRollCountQuestion from "../question/main/DodgeRollCountQuestion";
import FiringIntervalQuestion from "../question/main/FiringIntervalQuestion";
import HasDirectHitSoundQuestion from "../question/main/HasDirectHitSoundQuestion";
import IsExplosiveQuestion from "../question/main/IsExplosiveQuestion";
import MainWeaponMaxDamageQuestion from "../question/main/MainWeaponMaxDamageQuestion";
import MainWeaponNameQuestion from "../question/main/MainWeaponNameQuestion";
import RangeQuestion from "../question/main/RangeQuestion";
import SpreadQuestion from "../question/main/SpreadQuestion";
import WeaponCategoryQuestion from "../question/main/WeaponCategoryQuestion";
import WeightQuestion from "../question/main/WeightQuestion";
import CanOneShotQuestion from "../question/special/CanOneShotQuestion";
import DealsContinuousDamageQuestion from "../question/special/DealsContinuousDamageQuestion";
import HasRButtonActionQuestion from "../question/special/HasRButtonActionQuestion";
import HasZRButtonActionQuestion from "../question/special/HasZRButtonActionQuestion";
import JumpsToUsePointQuestion from "../question/special/JumpsToUsePointQuestion";
import SpecialWeaponIsAttackTypeQuestion from "../question/special/SpecialWeaponIsAttackTypeQuestion";
import SpecialWeaponNameQuestion from "../question/special/SpecialWeaponNameQuestion";
import CanBePlacedQuestion from "../question/sub/CanBePlacedQuestion";
import CanInkQuestion from "../question/sub/CanInkQuestion";
import CanMarkQuestion from "../question/sub/CanMarkQuestion";
import InkConsumptionQuestion from "../question/sub/InkConsumptionQuestion";
import SubWeaponIsAttackTypeQuestion from "../question/sub/SubWeaponIsAttackTypeQuestion";
import SubWeaponMaxDamageQuestion from "../question/sub/SubWeaponMaxDamageQuestion";
import SubWeaponNameQuestion from "../question/sub/SubWeaponNameQuestion";
import Weapon from "../Weapon";
import ComparatorFactory from "./ComparatorFactory";
import WeaponCategoryFactory from "./WeaponCategoryFactory";

class QuestionFactory {
  static create(
    questionName: string,
    answerWeapon: Weapon,
    option?: string,
    comparator?: string
  ) {
    const trimmedOption = option ? option.slice(0, -1) : "";
    switch (questionName) {
      case "CanChargeKeepQuestion":
        return new CanChargeKeepQuestion(answerWeapon);
      case "CanChargeQuestion":
        return new CanChargeQuestion(answerWeapon);
      case "CanRapidFireQuestion":
        return new CanRapidFireQuestion(answerWeapon);
      case "CanRollingOrBrushingQuestion":
        return new CanRollingOrBrushingQuestion(answerWeapon);
      case "DodgeRollCountQuestion":
        return new DodgeRollCountQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );
      case "FiringIntervalQuestion":
        return new FiringIntervalQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );
      case "HasDirectHitSoundQuestion":
        return new HasDirectHitSoundQuestion(answerWeapon);
      case "IsExplosiveQuestion":
        return new IsExplosiveQuestion(answerWeapon);
      case "MainWeaponMaxDamageQuestion":
        return new MainWeaponMaxDamageQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );
      case "MainWeaponNameQuestion":
        return new MainWeaponNameQuestion(answerWeapon, trimmedOption);
      case "RangeQuestion":
        return new RangeQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );
      case "SpreadQuestion":
        return new SpreadQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );
      case "WeaponCategoryQuestion":
        return new WeaponCategoryQuestion(
          answerWeapon,
          WeaponCategoryFactory.create(trimmedOption)
        );
      case "WeightQuestion":
        return new WeightQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );

      case "CanBePlacedQuestion":
        return new CanBePlacedQuestion(answerWeapon);
      case "CanInkQuestion":
        return new CanInkQuestion(answerWeapon);
      case "CanMarkQuestion":
        return new CanMarkQuestion(answerWeapon);
      case "InkConsumptionQuestion":
        return new InkConsumptionQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );
      case "SubWeaponIsAttackTypeQuestion":
        return new SubWeaponIsAttackTypeQuestion(answerWeapon);
      case "SubWeaponMaxDamageQuestion":
        return new SubWeaponMaxDamageQuestion(
          answerWeapon,
          Number(option),
          ComparatorFactory.create(comparator)
        );
      case "SubWeaponNameQuestion":
        return new SubWeaponNameQuestion(answerWeapon, trimmedOption);

      case "CanOneShotQuestion":
        return new CanOneShotQuestion(answerWeapon);
      case "DealsContinuousDamageQuestion":
        return new DealsContinuousDamageQuestion(answerWeapon);
      case "HasRButtonActionQuestion":
        return new HasRButtonActionQuestion(answerWeapon);
      case "HasZRButtonActionQuestion":
        return new HasZRButtonActionQuestion(answerWeapon);
      case "JumpsToUsePointQuestion":
        return new JumpsToUsePointQuestion(answerWeapon);
      case "SpecialWeaponIsAttackTypeQuestion":
        return new SpecialWeaponIsAttackTypeQuestion(answerWeapon);
      case "SpecialWeaponNameQuestion":
        return new SpecialWeaponNameQuestion(answerWeapon, trimmedOption);
      default:
        throw new Error("Invalid questionName");
    }
  }
}

export default QuestionFactory;
