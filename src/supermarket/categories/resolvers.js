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
		updateCategory: (_, { id, category }) =>
			generalRequest(`${URL}/${id}`, 'PUT', category),
		deleteCategory: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;