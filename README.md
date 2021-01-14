
# MTGJSON GraphQL V.2
<img src='./assets/mtgraphql.svg' height='150px' alt="mtgraphql logo"/>

### An Apollo GraphQL Server for [mtgjson.com](https://mtgjson.com)
[![Discord](https://img.shields.io/discord/224178957103136779.svg)](https://discord.gg/74GUQDE)

This repository contains the code to run the GraphQL server via Apollo Server.
Please note that you will need to set up your own PSQL server to pull from and for this to work you will need a `.env` file
with that looks similar to this:

```
DEV_MODE=true
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres (or whatever you want)
DB_PASS=<password>
DB_DATABASE=mtgjson (or whatever you want)
```

## About
---
MTGJSON GraphQL is exactly what you would expect from the name, an open-source GraphQL API and Server built on top of the
mtgjson data sets. This API focuses on the JSON payloads for MTGJSON specifically these:

- Card/Cards
- Deck/Decks
- Set/Sets
- SetList & DeckList (Meta-data structures for Sets & Decks)

### Maintained
This codebase is maintained by Milo as part of the greater mtgjson team which can be found on the [website](https://mtgjson.com). The hosted version of this software is available to patreons of the overall MTGJSON project in a beta status currently. 


[![Patreon](https://img.shields.io/static/v1.svg?label=Patreon&message=Support%20MTGJSON&color=f96854&logo=patreon)](https://patreon.com/mtgjson)

The Beta version of MTGGraphQL is available to patrons of MTGJSON with the goal of bringing a version to our other non-patron users.

### Contributing
If you would like to contribute to the development of this project please reach out on [Discord](https://mtgjson.com/discord)
or open a [pull request](https://github.com/milorue/mtgjson-graphql-v2/pulls) bug fixes, new features, and more are always appreciated. Feel free to support us through code or financial contributions.

### Issues
Report any bugs to [issues](https://github.com/milorue/mtgjson-graphql-v2/issues)

## How to Use
Before you utilize the service you must have a valid API key to pass in the header as `"authorization": Bearer <APIKey>` 
without this you won't be authorized to utilize the API and the server will deny your request. Each key is rate limited by key and by IP so one IP can 
make up to 1000 requests per hour and each key can make up to 500 per hour. The rate limits are subject to change and should be reflected on the website and in this 
README.

Basic Query
```js
query{
  getCard(
    input:{
      name: "Abundance"
    }
  ){
    uuid
    name
    artist
    text
  }
}
```

### Basic Usage
To get started from scratch quickly simply clone this repository and run the following:

`npm install`

`npm run dev`

This should install the required dependencies and if you have the write .env file and environment setup then things should 
spin up properly and info messages should tell you the server is listening on port 8000 or whatever port you set it to be.


Navigate to localhost:8000/ and you're set, docs for Apollo, GraphQL, NodeJS, TypeORM, and TypeGraphQL can all be found online.

### Advanged Usage
If you are looking to deploy this server yourself you will need to run
`npm run build` and then `npm start` using whatever deployment strategies you would like.

### General Usage 
For most people there will be no need to download the codebase and host your own server, the plans are to host this codebase at mtgjson.com/graphql or something similar initially as a beta for patrons and possibly moving towards a wider release upon proven success.

## Licensing
MTGJSON GraphQL is a freely available product under the [MIT License](https://github.com/mtgjson/mtggraphql/blob/master/LICENSE), allowing our users to enjoy Magic: the Gathering data free of charge, in perpetuity.




