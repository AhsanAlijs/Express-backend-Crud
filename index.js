const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
// const port = 3000
// middle Where
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('Hello User!')
})
app.get('/admin', (req, res) => {
    res.send('Hello Admin!')
})
app.get('/new', (req, res) => {
    res.send('Hello New!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})