import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({
    message: "Welcome to Next GraphQl",
    documentServer: "http://localhost:3000/api/document",
    documentClient: "http://localhost:3000/document",
  });
}