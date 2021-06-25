const route = require('express').Router()
//this route us on the "/api" path

const db = require('../db')

route.get('/persons/', (req, res) => {
    //Send all the persons as an array
    setTimeout(() => {
        db.getAllPersons()
        .then((persons) => res.send(persons))
        .catch((err) => res.send({error: err}))
    },2000)

})

route.post('/perons/', (req, res) => {
    //ADD the new person (details are in body)

    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => res.redirect('/api/persons/')) //redirect to get all person data
        .catch((err) => res.send({error: err}))
})


exports = module.exports = {
    route
}