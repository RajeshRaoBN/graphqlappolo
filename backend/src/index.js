const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5500
const mongoose = require('mongoose')
var { graphqlHTTP } = require('express-graphql');
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')

mongoose.connect(process.env.MONGO_URL, )
.then(() => console.log("The database is connected"))
.catch((err) => console.log(err))   

// Setting graphql
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    rootValue: resolvers,
    graphiql: true,
}))

app.get('/', (req, res) => {
    res.status(200).send("<h1>Welcome to Express</h1>")
})

app.listen(PORT, () => console.log(`The server is listning on port ${PORT}`))