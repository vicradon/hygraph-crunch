import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.CONTENT_API || "", {
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
});

export default client;
