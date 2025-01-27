import Comparator from "./Comparator";

class GreaterThanOrEqual extends Comparator {
  compare(a: any, b: any): boolean {
    return a >= b;
  }
}

export default GreaterThanOrEqual;
