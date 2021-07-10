import { ApolloServer} from 'apollo-server-express';
import config from './config';
// import playground from './playground';

// Data Sources
// import PulseAPI from './dataSources/pulse';

// Resolvers
// import Serviceability from './resolvers/serviceability';

// Schema requires ugly workarounds for ES6 imports
// const ServiceabilitySchema = require('./schema/serviceability.graphql');


export const resolvers = [
    Serviceability
];
// ^ must cast for apollo typing to not conflict
export const typeDefs = [
    ServiceabilitySchema,
];

const { debug } = true;

export const server = new ApolloServer({
    debug,
    typeDefs,
    resolvers,
    playground,
    dataSources: () => {
        return {
            pulse: new PulseAPI(),
            vault: new VaultAPI(),
            harbingerLibrary: new HarbingerLibraryAPI(),
            harbingerPredict: new HarbingerPredictAPI(),
            pipeline: new PipelineAPI(),
        };
    },
    plugins: [() => new LoggingPlugin()],
    context: setContext
});
