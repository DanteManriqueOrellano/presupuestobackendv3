import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { buildSchema, Query, Resolver } from 'type-graphql';

@Resolver()
export class Tictactoe {

	@Query(()=>String)
	tictactoe():string{
		return "ola"

	}

}
const appApolo = async () => {
	const app = express();
	const httpServer = http.createServer(app);
	const schema = await buildSchema({
		resolvers: [Tictactoe],
	  });
	const server = new ApolloServer({
	  schema,
	  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});
	await server.start();
	server.applyMiddleware({ app });
	await new Promise(
		(resolve) => 
			{
				httpServer.listen({ port: 4000 }, () => resolve)
			}
		);
  	
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}


export default appApolo;
