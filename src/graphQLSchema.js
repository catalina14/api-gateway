import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	clientMutations,
	clientQueries,
	clientTypeDef
} from './park-in-space/client-ms/typeDefs';

import clientResolvers from './park-in-space/client-ms/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		clientTypeDef
	],
	[
		clientQueries
	],
	[
		clientMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		clientResolvers
	)
});
