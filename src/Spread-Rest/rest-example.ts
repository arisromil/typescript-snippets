
// the ellipsis(...) signifies that the parameter is a placeholder for any number of arguments
const max =  function(...values) {
    let large = values[0];
    for (let i=0; i<values.length; i++) {
        if (values[i] > large) {
            large = values[i]
        }
    }
    return large;
}

console.log(max(0,7,3,9));



