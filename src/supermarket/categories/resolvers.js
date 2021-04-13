import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, createUser } from './server';
import {getUserById} from './peticiones';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		userById: (_,  id ) =>{
			let response = getUserById(`${URL}/${id.userId}`);
			return response;
	}},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}/${createUser}`, 'POST', user),
		deleteUser: (_, id) => {
			generalRequest(`${URL}/${id.userId}`, 'DELETE')
		}
	}
};

export default resolvers;
