interface User {
    id: number;
    firstName: string;
    lastName:string;
    age:number;
}
// In contrast to `Pick`, you can use `Omit` to remove a set of Keys
type UserPost = Omit<User, 'id'>;

const userName: UserPost = {
    firstName : 'John',
    lastName : 'Doe',
    age:28
};

