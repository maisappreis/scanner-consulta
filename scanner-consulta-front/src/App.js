import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import api from "./services/api"
import Routes from './routes';
import "./styles/global.css";

export default function App() {
  return (
    <ApolloProvider client={api}>
      <Routes />
    </ApolloProvider>
  );
}
