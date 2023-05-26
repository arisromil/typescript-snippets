interface Command {
    execute();
}
interface Receiver {
    methodA();
    methodB();
}
class ConcreteCommandA implements Command {
    constructor(private receiver: Receiver) { }
    execute() {
        this.receiver.methodA();
    }
}
class ConcreteCommandB implements Command {
    constructor(private receiver: Receiver) { }
    execute() {
        this.receiver.methodB();
    }
}