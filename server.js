const express = require('express')
const cors = require('cors')
const connectToMongo = require('./config/db')
require('dotenv').config({ path: './config.env' })
const eventRoutes = require('./routes/eventRoutes')

connectToMongo()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

// routes
app.use(eventRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`)
})
