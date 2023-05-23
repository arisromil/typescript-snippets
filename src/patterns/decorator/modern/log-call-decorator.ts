// The signature for a method Decorator is as follows:
// function (target: any, propertyKey: string, descriptor: PropertyDescriptor)

function LogCall() {
    return function (
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const caller = descriptor.value;
        descriptor.value = (message: string) => {
            console.log("Before sending event message", message);
            // @ts-ignore
            caller.apply(this, [message]);
            console.log("After sending event message", message);
            return caller;
        };
        return descriptor;
    };
}
class EventService {
    @LogCall()
    createEvent(message: string): void {
        console.log("Currently sending event message",
            message);
    }
}
new EventService().createEvent("Message");