import { Command, Receiver } from "./command.js";

export interface CommandHandler {
    handle(command: Command);
}
export class ConcreteCommandHandler implements CommandHandler {
    private commands: Command[] = [];
    handle(command: Command) {
        command.execute();
        this.commands.push(command);
    }
}
export class ConcreteReceiver implements Receiver {
    methodA() {
        console.log("Called method A");
    }
    methodB() {
        console.log("Called method B");
    }
}