type TrimLeft<V extends string> =
    V extends ` ${infer R}` ? TrimLeft<R> : V;

type TrimRight<V extends string> =
    V extends `${infer R} ` ? TrimRight<R> : V;

type Trim<V extends string> = TrimLeft<TrimRight<V>>;

type S0 = TrimLeft<" bytefer">; // "bytefer"
type S1 = TrimRight<"bytefer ">; // "bytefer"
type S2 = Trim<" bytefer ">; // "bytefer"
