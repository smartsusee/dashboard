const express = require('express')

const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const router = require('./crud/Router/student_router')

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log(`db is connect`)
  })
  .catch(() => {
    console.log(`db is not connected`)
  })
app.use(cors())

app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`server running port on:${process.env.PORT}`)
})
