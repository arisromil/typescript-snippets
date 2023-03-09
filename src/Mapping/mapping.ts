type User = {
    name: string;
    password: string;
    address: string;
    phone:string;
}

// type UserPartial = {
//     name?: string;
//     password?: string;
//     address?: string;
//     phone?:string;
// }


// Map to optional properties like the commented UserPartial type above
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

type UserPartial = MyPartial<User>;



