import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { TicTacToe1 } from "./src/loaders/express";


const app = express();
export async function startServer() {

  loa()

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TicTacToe1],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });
  await server.start()

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}

export async function loa() {
    new Promise((resolve)=>{
        resolve(require('./src/loaders').default({expressApp:app}))
    })
    
}
