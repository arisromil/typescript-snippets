// Using an IoC container is the next alternative way to control Singletons. 
// usage of Inversify.js
// Every time you ask the `container` to resolve the TYPES.UsersApiService binding, it will return the same instance of UsersApiServiceImpl.

import "reflect-metadata";
import { injectable, Container } from "inversify";

interface UsersApiService {
    getUsers(): Promise<string[]>;
}

let TYPES = {
    UsersApiService: Symbol("UsersApiService"),
};

@injectable()
class UsersApiServiceImpl implements UsersApiService {
    getUsers(): Promise<string[]> {
        return Promise.resolve(["Alex", "John", "Sarah"]);
    }
}

const container = new Container();

container
    .bind<UsersApiService>(TYPES.UsersApiService)
    .to(UsersApiServiceImpl)
    .inSingletonScope();

container
    .get<UsersApiService>(TYPES.UsersApiService)
    .getUsers()
    .then((res) => console.log(res));