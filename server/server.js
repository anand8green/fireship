import express from 'express'
import cors from 'cors'
import { Chance } from 'chance'

const app = express()
app.use(cors())

//  This works like body parser
app.use(express.json())

//  Chance is a random animal generator
const chance = new Chance()
// Here we are generating a blank arrays of 200 items and map and return with random animals
const animals = [...new Array(200).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  }
})
// Here based on the search query we are filtering out the result.
app.get('', (req, res) => {
  const q = req.query.q?.toLowerCase() || ''
  const result = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  )
  res.send(result)
})
// App is live on this port
app.listen(8000, console.log('server running'))
