
const router = require('express').Router()
//const { response } = require('express')
const path = require('path')

const root = path.join(__dirname, '..', '..', 'public')

router.get('/', (_, response) => response.sendFile('index.htm', { root }))


module.exports = router