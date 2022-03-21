// require express
const express = require("express")

// Require cors
const cors = require("cors")

const app = express()

// Set up server to accept json obj responses
app.use(express.json())
app.use(cors())

// Set exp. server to listen to reqs on port 4000, test w/ nodemon
app.listen(4000, () => console.log("listening on port 4000"))

// Create a get req. for the endpoint /api/users
app.get("api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
  res.status(200).send(friends)
})

// And one for the weather endpoint
app.get("/weather/:temperature", (req, res) => {
  const { temperature } = req.params
  const phrase = `<h3>It was ${temperature} today</h3>`
  res.status(200).send(phrase)
})