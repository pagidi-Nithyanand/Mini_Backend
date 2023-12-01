const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL
const dbon = async () => {
  if (process.env.NODE_ENV !== 'test') {
    try {
      await mongoose.connect(
        'mongodb+srv://Gopi:Gopino.1@cluster0.luogiyd.mongodb.net/'
      )
      console.log('Connected to MongoDB')
    } catch (error) {
      console.log(error)
    }
  }
}
const dboff = async () => {
  try {
    await mongoose.connection.close()
    console.log('Disconnected from MongoDB')
  } catch (error) {
    console.log(error)
  }
}
module.exports = { dbon, dboff }
