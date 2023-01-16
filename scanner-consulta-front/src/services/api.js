import ApolloClient from "apollo-boost";

const api = new ApolloClient({
  // eslint-disable-next-line no-undef
  uri: process.env.REACT_APP_API_BASE_URL
});

export default api;