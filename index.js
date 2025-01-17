const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()


app.listen(3000, () => {
    console.log('express está escuchando en el puerto http://localhost:3000')
})