import 'reflect-metadata';
//import express from "express";
import config from './src/config';
import http from 'http';


import { buildSchema, ClassType, NonEmptyArray } from 'type-graphql';
//import { TicTacToe } from './src/api/graphql';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { TicTacToe1 } from './src/loaders/express';

/*
class Server {
    private app: express.Application;
    constructor() {
      this.app = express();
      /**
       * A little hack here
       * Async/Await cannot used in Class methods
       * So instead Promises are used here
       * @method Preconfig
       **/
  /*    new Promise(resolve => {
        /**
         * Import/Export can only be used in 'top-level code'
         * So using good old require statements.
         **/
    /*    resolve(require('./src/loaders').default({ expressApp: this.app }));
      }).then(() => {
        this.startServer(this.app);
      });
    }
  
    private async startServer(app: express.Application) {
      
      const server = new ApolloServer({
        schema: await buildSchema({
          resolvers: [TicTacToe1],
          validate: false
        }),
        context: ({ req, res }) => ({ req, res })
      });
      await server.start()
    
      server.applyMiddleware({ app, path: "/graphql1" });
      
      
      
      
      
      
      
      app.listen(config.port,() => {
        console.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️
        🌐 http://localhost:3000
        ################################################
      `);

      } );
    }
  }
  new Server();

*/

/*
class Server {
    private app:express.Application = express();
    private httpServer = http.createServer(this.app);
    constructor(){
        //this.app = express()
        /*
        *@method Preconfig
        */
    /**    new Promise((resolve)=>{
           resolve(require('./src/loaders').default({expressApp:this.app}))
       }).then(()=>{
           this.starterServer()

       })
    }

    private async starterServer(){

       
        
        const schema = await buildSchema({
            resolvers:[TicTacToe]
        })
        const server = new ApolloServer({
            schema,
           
          });
          await server.start();
          server.applyMiddleware({ app:this.app });
          await new Promise(resolve => this.httpServer.listen({ port: 4000 }, ()=>resolve));
          console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  
        
          

        
         

    }

 

}
new Server();
*/
/*
async function startApolloServer() {
    // Required logic for integrating with Express
    const app = express();
    const httpServer = http.createServer(app);
    const schema = await buildSchema({
        resolvers:[TicTacToe]
    })
  
    // Same ApolloServer initialization as before, plus the drain plugin.
    const server = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
  
    // More required logic for integrating with Express
    await server.start();
    server.applyMiddleware({
       app,
  
       // By default, apollo-server hosts its GraphQL endpoint at the
       // server root. However, *other* Apollo Server packages host it at
       // /graphql. Optionally provide this to match apollo-server.
       path: '/'
    });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, ()=>resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  
   
  }
  startApolloServer()
*/
/*
import "reflect-metadata";
//import { connect } from "./config/typeorm";
import { startServer } from "./app";

async function main() {
 // connect();
  const app = await startServer();
  app.listen(3000);
  console.log("Server on port 3000");
}

main();
*/
/*
const app = express();

const schema = async ()=>{ 
  return await buildSchema({
    resolvers:[TicTacToe1]
  })

} 

// Same ApolloServer initialization as before, plus the drain plugin.
const server = new ApolloServer({
schema: schema()

});

// More required logic for integrating with Express
await server.start();
server.applyMiddleware({
 app,

 // By default, apollo-server hosts its GraphQL endpoint at the
 // server root. However, *other* Apollo Server packages host it at
 // /graphql. Optionally provide this to match apollo-server.
 path: '/'
});

const startApp = async () => {
  try {
      // Connect With MongoDB Database
      await mongoose.connect(DB, {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
      });
      success({
          badge: true,
          message: `Successfully connected with the database ${DB}`,
      });

      // Apply Apollo-Express-Server Middlware to express application
      server.applyMiddleware({
          app,
          cors: true
      });

      // Start Listening on the Server
      app.listen(PORT, () =>
          success({
              badge: true,
              message: `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
          })
      );
  } catch (err) {
      error({
          badge: true,
          message: err.message
      });
  }
}
*/
const express = require('express')
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time');
const { promisify } = require('util');

const app = express()

const client = redis.createClient({
    host: '127.0.0.1',
    port: 8081
})

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

app.use(responseTime())

app.get('/character', async(req:any, res:any, next:any) => {
    try {
        const reply = await GET_ASYNC('jokes');
        if (reply) {
            console.log('using cached data');
            return res.send(JSON.parse(reply))
        }

        const response = await axios.get('https://rickandmortyapi.com/api/character')
        const saveResult = await SET_ASYNC('jokes', JSON.stringify(response.data), 'EX', 10);

        console.log('saved data:', saveResult);

        res.send(response.data)
    } catch (error:any) {
        res.send(error.message)
    }
});

app.get('/character/:id', async (req:any, res:any, next:any) => {
    try {
        const reply = await GET_ASYNC(req.params.id);
        if (reply) {
            console.log('using cached data');
            return res.send(JSON.parse(reply))
        }

        const response = await axios.get('https://rickandmortyapi.com/api/character/' + req.params.id);
        const saveResult = await SET_ASYNC(req.params.id, JSON.stringify(response.data), 'EX', 15);

        console.log('saved data:', saveResult);

        res.send(response.data)
    } catch (error:any) {
        console.log(error)
        res.send(error.message)
    }
})

app.listen(3000, console.log('server listen on port 3000'))
