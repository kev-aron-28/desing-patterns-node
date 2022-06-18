const express = require('express')

const services = require('./services')
const handlify = require('./handlers')

const usersHandler = handlify('users')
const postHandler = handlify('posts')

const app = express()
const port = 8080


app.use(express.json())

app.get('/:id', usersHandler(services).get)
app.post('/:id', usersHandler(services).post)
app.delete('/:id', usersHandler(services).delete)
app.put('/:id', usersHandler(services).put)


app.get('/posts', postHandler(services).get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
