import ApolloClient from "apollo-boost";

const api = new ApolloClient({
  uri: process.env.REACT_APP_API_BASE_URL
});

export default api;
