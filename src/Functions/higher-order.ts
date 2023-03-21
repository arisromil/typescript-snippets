const setStrongHallProgram = program => {
    const defaults = {
        hours : '8am',
        address : 'Denver',
        name: 'John',
        phone: '303-333-3333'
    }
    return {...defaults, ...program}
}
