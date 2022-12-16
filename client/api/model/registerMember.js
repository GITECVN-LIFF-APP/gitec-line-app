var mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Business
let Accounts = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  {
    collection: 'accounts',
  },
)

module.exports = mongoose.model('Accounts', Accounts)
