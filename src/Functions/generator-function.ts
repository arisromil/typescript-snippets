// Creating a Generator Function That Yields Multiple Values
// To declare a generator function, start by replacing the function keyword with function*:

function* generateValues() {
    yield 895498;
    yield 'This is the second value';
    yield 5;
    return 'This is the end';
}

const generator = generateValues();

// Start the generator (it runs from the beginning to the first yield)
console.log(generator.next().value);  // 895498

// Resume the generator (until the next yield)
console.log(generator.next().value);  // 'This is the second value'

// Get the final two values
console.log(generator.next().value);  // 5
console.log(generator.next().value);  // 'This is the end'
