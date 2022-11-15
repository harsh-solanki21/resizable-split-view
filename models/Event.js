const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
  {
    data: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const eventModel = mongoose.model('events', Event)

module.exports = eventModel
