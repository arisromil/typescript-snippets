// spread operator looks the same as the rest operator (...)
// but it appears on the calling side of functions instead of on the parameter or receiving side.
// spread breaks a collection into discrete values whereas rest gathers discrete values into an array

const prepareFood = function(...orders) {
    console.log('preparing food...' + orders.join(', '));
}
const orders = ['salad', 'fries', 'cupcake'];
prepareFood(...orders);

// using the spread operator to copy contents of an object
// while optionally providing new values for some field and/or adding new fields
const john = { name:'John', age:2 };
console.log({...john, age: 3});
console.log({...john, age: 4, height: 100 });
console.log(john);

//output
// { name: 'John', age: 2 }
// { name: 'John', age: 3 }
// { name: 'John', age: 4, height: 100 }
// { name: 'John', age: 2 }


