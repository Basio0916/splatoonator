import Comparator from "./Comparator";

class LessThanOrEqual extends Comparator {
  compare(a: any, b: any): boolean {
    return a <= b;
  }
}

export default LessThanOrEqual;
