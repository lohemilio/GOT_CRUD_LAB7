const validator = require('validator')
const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    born: {
        type: String
    },
    timeline:{
        type: String
    },
    alliegance: [String],
    playedBy: {
        type: String
    },
    titles: [String],
    father: {
        type: String
    },
    mother:{
        type: String
    },
    spouse:{
        type: String
    }
})


const Person = mongoose.model('Person', personSchema)
module.exports = Person
