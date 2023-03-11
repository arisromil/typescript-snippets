interface User {
    id?: number;
    firstName: string;
    lastName:string;
    age?:number;
}

// use `ReadOnly` when you dont want the properties of an object reassigned,
// e.g. Name it will set the properties of Type set to read only

// const user4Ever = Readonly<User> = {
//     firstName : 'John4Ever',
//     lastName : 'Doe4Ever'
// }
