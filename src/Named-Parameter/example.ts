// Named parameters allow a function to be called using the parameter names with their values rather than just their values in a fixed order.

// Put all function arguments here. Define which ones are optional and which ones are required
interface User {
    firstName?: string,
    age?: number,
    email?: string,
}

// Use the interface to define the function argument type
function addUserToDatabase({firstName, age = 0, email}: User) {
    // ...
}

//  if all values are marked as optional, provide a default empty object
function addUserToDatabase_AllOptional({ firstName, age, email }: User = {}) {
    // ...
}
