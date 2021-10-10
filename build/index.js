"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
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
var express = require('express');
var axios = require('axios');
var redis = require('redis');
var responseTime = require('response-time');
var promisify = require('util').promisify;
var app = express();
require('dotenv').config();
var REDIS_HOST = "ec2-52-5-212-47.compute-1.amazonaws.com"; // replace with own IP
var REDIS_PORT = 23120;
var REDIS_PASSWORD = "p084e82949e443be46868bb05142b8b5443c90f2b55c954adbeec014ec7227672";
var client = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
    retryStrategy: function (times) { return Math.max(times * 100, 3000); },
    tls: {
        rejectUnauthorized: false,
        requestCert: true,
    },
});
var GET_ASYNC = promisify(client.get).bind(client);
var SET_ASYNC = promisify(client.set).bind(client);
app.use(responseTime());
app.get('/character', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var reply, response, saveResult, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, GET_ASYNC('jokes')];
            case 1:
                reply = _a.sent();
                if (reply) {
                    console.log('using cached data');
                    return [2 /*return*/, res.send(JSON.parse(reply))];
                }
                return [4 /*yield*/, axios.get('https://rickandmortyapi.com/api/character')];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, SET_ASYNC('jokes', JSON.stringify(response.data), 'EX', 10)];
            case 3:
                saveResult = _a.sent();
                console.log('saved data:', saveResult);
                res.send(response.data);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                res.send(error_1.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.get('/character/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var reply, response, saveResult, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, GET_ASYNC(req.params.id)];
            case 1:
                reply = _a.sent();
                if (reply) {
                    console.log('using cached data');
                    return [2 /*return*/, res.send(JSON.parse(reply))];
                }
                return [4 /*yield*/, axios.get('https://rickandmortyapi.com/api/character/' + req.params.id)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, SET_ASYNC(req.params.id, JSON.stringify(response.data), 'EX', 15)];
            case 3:
                saveResult = _a.sent();
                console.log('saved data:', saveResult);
                res.send(response.data);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                res.send(error_2.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, console.log('server listen on port 3000'));
//# sourceMappingURL=index.js.map