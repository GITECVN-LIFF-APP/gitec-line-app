import mongoose from 'mongoose'

const URL =
  'mongodb+srv://admin:Gitec123@gitecvn.ake6ycf.mongodb.net/Gas-Station?retryWrites=true&w=majority'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
}
mongoose.set('strictQuery', false)
mongoose
  .connect(`${URL}`, options)
  .then(() => {
    console.info('Mongoose connection done')
  })
  .catch((e) => {
    console.info('Mongoose connection error')
    console.error(e)
  })
