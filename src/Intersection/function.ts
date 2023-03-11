type F1 = (a:string, b:string) => void;
type F2 = (a:number, b:number) => void;
type F3 = (a:number, b:string) => void;

let intersectedFunction : F1 & F2 & F3 = (a:string | number, b:string | number) => {}

intersectedFunction("hello", 'typescript');
intersectedFunction(1, 2);
intersectedFunction(1000, "hello");
