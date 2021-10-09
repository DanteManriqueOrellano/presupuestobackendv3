import "reflect-metadata";
import { Router } from 'express';
import middlewares from '../middlewares';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import {createServer} from 'http';
import { buildSchema, Query, Resolver } from 'type-graphql';
import { Tictactoe } from "../middlewares/appApollo";



const route: Router = Router();

export default (app:Router ) => {
	app.use('/graphql', (req,res)=>{res.send("todo")});

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
};
