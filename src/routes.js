const express = require('express')
const persons = require('./controllers/persons.js')


const router = express.Router()

router.post('/persons', persons.createPerson)
router.get('/persons', persons.getPersons)
router.get('/persons/:id', persons.getPerson)
router.patch('/persons/:id', persons.updatePerson)
router.delete('/persons/:id', persons.deletePerson)
module.exports = router