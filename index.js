const express = require('express')
require('dotenv').config()
const db = require('./module/db.js')

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.urlencoded({ extended: true }))

db.sequelize.authenticate()
  .then(() => {
    require('./routes/shopping')(app, db);
    app.listen(PORT, () => {
          console.log('Server has been started...')
    })  
  })
  .catch(err => {
    console.error(err);
  });