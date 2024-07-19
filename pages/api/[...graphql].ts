import { ApolloServer } from 'apollo-server-micro';
import { schema } from './schema';
import { NextApiRequest, NextApiResponse } from 'next';

const apolloServer = new ApolloServer({
    schema,
    introspection: true,  // Allows introspection of the schema
});

const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await startServer;
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};
