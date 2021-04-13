import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, createUser } from './server';
import {getUserById, getAllUsers, createUser, deleteUser, updateUser} from './peticiones';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) => {
			let response = getAllUsers (URL);
			return response;
		},
		userById: (_,  id ) =>{
			let response = getUserById(`${URL}/${id.userId}`);
			return response;
	}},
	Mutation: {
		createUser: (_, { user }) => {
			let response = createUser(`${URL}/${createUser}`, user);
			return response;
		},
		deleteUser: (_, id) => {
			let response = deleteUser(`${URL}/${id.userId}`);
			return response;
		},
		updateUser: (_, { user }) => {
			let response = updateUser(`${URL}/${createUser}`, user);
			return response;
		}

	}
};

export default resolvers;
