const express = require('express');
const expressGraphQL = require('express-graphql');
const PORT = process.env.PORT || 4000;
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema
}));

app.listen(PORT, () => {
    console.info(`listening on port ${PORT}`)
});