// higher order functions provide value by locking in parameters
// a function can be completed later while still maintaining access to the original arguments, and isolate arguments to keep intentions clear
// TLDR; you can have multiple sets of parameters that are independent of one another.

const building = {
    hours: '8am',
    address: 'Denver'
};

const manager = {
    name : 'John',
    phone: '303-333-3333'
}
const program = {
    name : 'History',
    room: '415'
}

const exhibitInfo = {
    name: 'emerging trends',
    contact: 'Bob'
}

function mergeProgramInfo(building, manager) {
    const {hours, address } = building;
    const {name, phone } = manager;
    const defaults = {
        hours,
        address,
        contact:name,
        phone
    };
    return program => {
        return {...defaults, ...program};
    };
}

const setStrongHallProgram = mergeProgramInfo(building,manager);
const programs = setStrongHallProgram(program);
const exhibit = setStrongHallProgram(exhibitInfo);




