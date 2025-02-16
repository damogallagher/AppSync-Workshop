import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import logo from './logo.svg';
import config from './aws-exports';

const { endpoint } = config.aws_cloud_logic_custom[0];
console.log({ endpoint });
// Query definition
const query = gql`
  query {
    hello,
    hello2
  }
`;

function App() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <h3>Loading...</h3>;
  if (error) {
    console.log({ error });
    return <h3>Error occurred: {error.message}</h3>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello: {data.hello}</h1>
        <h1>hello 2: {data.hello2}</h1>
      </header>
    </div>
  );
}

// Create Apollo Client instance
const client = new ApolloClient({
  uri: endpoint + '/graphql',
  cache: new InMemoryCache(), // Use InMemoryCache for caching queries
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppWithProvider;
