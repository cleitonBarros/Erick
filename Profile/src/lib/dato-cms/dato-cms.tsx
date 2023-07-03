import { GraphQLClient } from "graphql-hooks";

const API_TOKEN = process.env.TOKEN;

export const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    // eslint-disable-next-line prettier/prettier
    Authorization: `Bearer ${API_TOKEN}`,
    "X-Include-Drafts": "true"
  }
});
