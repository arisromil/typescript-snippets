export class Classic {
    private static instance: Classic;
    private constructor() { }
    static getInstance() {
        if (!Classic.instance) {
            Classic.instance = new Classic();
        }
        return Classic.instance;
    }
    getUsers(): Promise<any> {
        return Promise.resolve(["Alex", "John", "Sarah"]);
    }
}
const usersPromise = Classic.getInstance().
    getUsers();
usersPromise.then((res) => {
    console.log(res);
})