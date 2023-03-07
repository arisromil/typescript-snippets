interface User {
    id: number;
    firstName: string;
    lastName:string;
    age:number;
}
// `Pick` a set of keys from the given type
type UserFullName = Pick<User, 'firstName' | 'lastName'>;

const exampleName: UserFullName = {
    firstName: 'John',
    lastName: 'Doe'
};
