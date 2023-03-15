// Creating a Function That Stores its State with a Closure
function greetingMaker(greeting) {
    function addName(name) {
        return `${greeting} ${name}`;
    }
    return addName;
}

const daytimeGreeting = greetingMaker('Good Day to you');
const nightGreeting = greetingMaker('Good Evening');

console.log(daytimeGreeting('Jack'));   // Shows 'Good Day to you Jack'
console.log(nightGreeting('Jill'));     // Shows 'Good Evening Jill'
