type NoNumbers<T> =  T extends number ? never : T;
type MyType = 1 | 2 | 3 | 'a' | 'b' | 'c';

type NewTypeWithoutNumbers = NoNumbers<MyType>; // a,b,c
