"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = require("express");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use('/graphql', function (req, res) { res.send("todo"); });
    //route.use(middlewares.isAuth);
    //route.use(middlewares.attachCurrentUser);
    /*route.use(
        '/',async ( ) => {
            
            const schema = await buildSchema({
                resolvers: [Tictactoe],
              });
            const server = new ApolloServer({
              schema,
              
            });
            await server.start();
            //server.applyMiddleware({ exApp });
            //res.send("simon")

            
        }
            

        
    );*/
});
//# sourceMappingURL=index.js.map