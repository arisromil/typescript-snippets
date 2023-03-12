//
// eg, if you want to restrict the arg parameter object from containing both id and name properties
// use the `never` type, by setting add optional(?) id and name attributes to the User and Id types, and set their types to never type.
//
type User = {
    id?: never;
    name: string;
}

type Id = {
    id: number;
    name?: never;
}

declare function findUser(arg: Id | User): boolean;

const user0 = {name: "John", id:1 };
const user1 = {name:"John"};
const user2 = {id:1}

// only findUser(user0) will error out
