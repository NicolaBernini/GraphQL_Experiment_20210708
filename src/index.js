// Import Apollo Server 
const {ApolloServer} = require('apollo-server');


// Define the Query Type in GraphQL
const typeDefs = `
    type Query {
        info: String!,
        name: String!
    }
`

// Define the Resolver
const resolvers = {
    Query: {
        info: () => `Test`,
        name: () => `Nikola's Server`
    }
}

// Instantiate the Server  
const server = new ApolloServer({typeDefs, resolvers})

// Run the Server 
server.listen().then(
    ({url}) => console.log(`Received ${url}`)
)



