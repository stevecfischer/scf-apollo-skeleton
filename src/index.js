const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const typeDefs = require("./schema");
const { createStore } = require("./util");
const LaunchAPI = require("./dataSources/launch");
const UserAPI = require("./dataSources/user");
const resolvers = require("./resolvers");

// set up any dataSources our resolvers need
const dataSources = () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store }),
});

const store = createStore();




const server = new ApolloServer({
  debug: true,
  typeDefs,
  resolvers,
  dataSources,
});

// const myGraphQLSchema = // ... define or import your schema here!
const PORT = 4000;

const app = express();

// // bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), new ApolloServer({ typeDefs }));
//
// app.listen(PORT);

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

app
  .listen(PORT, () => {
    /* tslint:disable */
    // Color guide: https://stackoverflow.com/a/41407246/1817288
    const reset = "\x1b[0m";
    const greenFont = "\x1b[32m";
    const brightFont = "\x1b[1m";
    console.log(greenFont, brightFont);
    console.log(`==========================================================`);
    console.log(`Listening http://localhost:${PORT}`);
    console.log(`neat tool https://studio.apollographql.com/`);
    console.log(`==========================================================`);
    console.log(reset);
    /* tslint:enable */
  })
  .setTimeout(5 * 60 * 1000);

//
//
// const server = new ApolloServer({typeDefs});
//
// server.listen().then(() => {
//     console.log(`
//     Server is running!
//     Listening on port 4000
//     Explore at https://studio.apollographql.com/sandbox
//   `);
// });

server.applyMiddleware({ app });
