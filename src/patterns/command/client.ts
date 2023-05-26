import { ConcreteCommandHandler, ConcreteReceiver } from "./command-handler.js";
import { ConcreteCommandA, ConcreteCommandB } from "./command.js";

const handler = new ConcreteCommandHandler();

const receiver = new ConcreteReceiver();

handler.handle(new ConcreteCommandA(receiver)); /* logs Called method A*/
handler.handle(new ConcreteCommandB(receiver)); /* logs Called method B*/