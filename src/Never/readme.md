`Never` type in TypeScript is called the bottom type in TypeScript. 
it represents a type with no value, also known as a zero type or an empty type, 
and is a subtype of all types. That is, it can be assigned to other types. But no type is a subtype of or assignable to never, including any.


The `never` type represents an empty type, no value is contained in the type. 
So in `union` types, the `never` type will be eliminated. In the `intersection` type, the never type will override other types and finally return the `never` type.

type T0 = 1 | 2 | never;   //1|2 
type T1 = any | never;     //any
type T2 = number & never;  //number
type T3 = any & never;     // never
