// `Partial` will make a new type set with all the properties of the Type set, set to optional

type User = {
    firstName: string;
    lastName: string;
}
let firstUser: Partial<User> = {
    firstName : 'John'
}

