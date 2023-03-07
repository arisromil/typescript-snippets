type Record<K extends keyof any, T> = {
 [P in K]: T;
}

interface Dictionary<T> {
  [index: string]: T;
}

interface NumericDictionary<T> {
  [index: number]: T;
}

const data:Dictionary<number> = {
  a: 1,
  b: 2
}

