// Create Objects without mutations using Object.assign()
// the method lets you update an object with properties from another object

const book = {
    author: 'Stephen King',
    title : 'The Stand'
}

const defaults = {
    author: '',
    title : '',
    year: 1995,
    genre: 'Horror'
}

Object.assign(defaults, book)

// make the first object an empty object to prevent mutations on other objects
Object.assign({},defaults, book)
