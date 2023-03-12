//During the mapping process,
// if the type variable Kis of the “kind” type,
// the `never` type will be returned,
// and the “kind” attribute will be filtered out.

type RemoveKindField<T> = {
    [K in keyof T as Exclude<K, "kind">]: T[K]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
