
const express = require('express')
const colors = require('ansi-colors')
const app = express()
const port = 3000


// middleware - respond with static webpages
app.use(express.static('public'))
//allow us to send json
app.use(express.json())

// routes
app.use('/api/v1', require('./routes/api/v1/recipes'))
app.use('/', require('./routes/pages/recipes'))


// server
const url = colors.blue('http://localhost:3000/')
const message = `Server is running on port ${port}. Visit ${url} in your browser.`
app.listen(port, () => console.log(message))