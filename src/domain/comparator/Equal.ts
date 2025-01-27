import Comparator from "./Comparator";

class Equal extends Comparator {
  compare(a: any, b: any): boolean {
    return a === b;
  }
}

export default Equal;
