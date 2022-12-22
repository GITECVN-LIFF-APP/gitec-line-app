import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import moment from 'moment-timezone'
import morgan from 'morgan'

import './config/database'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/api', routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
