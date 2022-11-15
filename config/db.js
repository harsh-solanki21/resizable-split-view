const mongoose = require('mongoose')
require('dotenv').config({ path: './config.env' })

const connectToMongo = async () => {
  await mongoose.connect(
    `mongodb+srv://harsh:${process.env.MONGO_PASS}@clusterdb.x7z3xn5.mongodb.net/?retryWrites=true&w=majority`,
    () => {
      console.log('Connected to mongoDB successfully')
    }
  )
}

module.exports = connectToMongo
