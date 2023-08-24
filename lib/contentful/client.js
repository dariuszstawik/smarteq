const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ? process.env.CONTENTFUL_SPACE_ID : "",
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
    ? process.env.CONTENTFUL_ACCESS_KEY
    : "",
});
