const { ApolloServer, gql } = require("apollo-server");
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err))

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;


const server = new ApolloServer({
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
