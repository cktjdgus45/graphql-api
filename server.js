import { ApolloServer, gql } from 'apollo-server';


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    text:String
    hello:String
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const server = new ApolloServer({
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`)
})
