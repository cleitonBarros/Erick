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

export const ASSETS_QUERY = `query {
  allAssets {
    id
    name
    image{
      url(imgixParams: {fm: jpg, fit:crop, w: 300 ,h:300 })
    }
}`;

export const PERFIL_QUERY = `query{
  allPerfils{
    id
    name
    perfil{
      url
    }
    
  }
}`;

export const VIDEO_QUERY = `query{
  allVideos{
    id
    film{
      url
    }
  }

}`;
