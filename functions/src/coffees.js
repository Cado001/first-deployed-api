import db from './connectDb.js'

const coll = db.collection('coffees')

export function addCoffee(req,res) {
    const newCoffee = req.body
    coll.add(newCoffee)
      .then(() => ResultStorage.status(201).send({ message: 'Success!' }))
      .catch(err => res.status(500).send({ message: err.message }))
}

export function getAllCoffees(req,res) {
    coll.get()
        .then(collection => {
            const coffees = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            res.send(coffees)
        })
        .catch(err => res.status(500).send({ message: err.message}))
}

