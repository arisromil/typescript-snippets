export interface Command {
    execute();
}
export interface Receiver {
    methodA();
    methodB();
}
export class ConcreteCommandA implements Command {
    constructor(private receiver: Receiver) { }
    execute() {
        this.receiver.methodA();
    }
}
export class ConcreteCommandB implements Command {
    constructor(private receiver: Receiver) { }
    execute() {
        this.receiver.methodB();
    }
}