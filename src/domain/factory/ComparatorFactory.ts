import Comparator from "../comparator/Comparator";
import Equal from "../comparator/Equal";
import GreaterThanOrEqual from "../comparator/GreaterThanOrEqual";
import LessThanOrEqual from "../comparator/LessThanOrEqual";

class ComparatorFactory {
  static create(type: string | undefined): Comparator {
    switch (type) {
      case "以上？":
        return new GreaterThanOrEqual();
      case "以下？":
        return new LessThanOrEqual();
      case "？":
        return new Equal();
      default:
        throw new Error("Invalid type");
    }
  }
}

export default ComparatorFactory;
