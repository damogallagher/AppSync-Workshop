const { ApolloServer, gql } = require('apollo-server-lambda')
const typeDefs = gql`
type Query {
hello: String,
hello2: String
}
`

const resolvers = {
    Query: {
        hello:() => "Hello from Apollo!",
        hello2:() => "Hello also from Apollo!"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({ event, context}) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context
    })
})

exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true
    }
})