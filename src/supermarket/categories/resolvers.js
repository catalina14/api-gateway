import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, createUser } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}/${createUser}`, 'POST', user),
	}
};

export default resolvers;
