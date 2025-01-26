import Weight from "../Weight";

class WeightFactory {
  static create(weight: string): Weight;
  static create(weight: number): Weight;

  static create(weight: string | number): Weight {
    if (typeof weight === "string") {
      switch (weight) {
        case "最軽量級":
          return Weight.ExtraLight;
        case "軽量級":
          return Weight.Light;
        case "中量級":
          return Weight.Medium;
        case "重量級":
          return Weight.Heavy;
        default:
          throw new Error(`Invalid Weight value: ${weight}`);
      }
    } else if (typeof weight === "number") {
      switch (weight) {
        case 0:
          return Weight.ExtraLight;
        case 1:
          return Weight.Light;
        case 2:
          return Weight.Medium;
        case 3:
          return Weight.Heavy;
        default:
          throw new Error(`Invalid Weight value: ${weight}`);
      }
    } else {
      throw new Error(`Invalid type for Weight value: ${typeof weight}`);
    }
  }
}

export default WeightFactory;
