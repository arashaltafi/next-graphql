import { gql } from 'apollo-server-micro';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { NextApiRequest, NextApiResponse } from 'next';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },

    Mutation: {
        hello: () => 'Hello world!',
    }
};

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({
    message: "Please visit this link for GraphQL",
    link: 'http://localhost:3000/api/graphql'
  });
}