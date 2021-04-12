import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, createUser } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		userById: (_,  id ) =>
			generalRequest(`${URL}/${id.userId}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}/${createUser}`, 'POST', user),
		deleteUser: (_, id) => {
			generalRequest(`${URL}/${id.userId}`, 'DELETE')
		}
	}
};

export default resolvers;
