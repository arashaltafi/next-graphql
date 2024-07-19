import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.send(
      `<html>
         <head>
           <title>GraphiQL</title>
           <link rel="stylesheet" href="https://unpkg.com/graphiql/graphiql.css" />
           <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
           <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
           <script src="https://unpkg.com/graphiql/graphiql.min.js"></script>
         </head>
         <body>
           <div id="graphiql" style="height: 100vh;"></div>
           <script>
             const fetcher = GraphiQL.createFetcher({ url: '/api/graphql' });
             ReactDOM.render(
               React.createElement(GraphiQL, { fetcher }),
               document.getElementById('graphiql')
             );
           </script>
         </body>
       </html>`
    );
  } else {
    res.status(405).end();
  }
}
