import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, createUser } from './server';
import {getUserById, getAllUsers, postCreateUser, deleteDeleteUser, putUpdateUser, deleteDeleteAllUsers} from './peticiones';

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
			let response = postCreateUser(`${URL}/${createUser}`, user);
			return response;
		},
		deleteUser: (_, id) => {
			let response = deleteDeleteUser(`${URL}/${id.userId}`);
			return response;
		},
		updateUser: (_, { user }) => {
			let response = putUpdateUser(`${URL}/${user.userId}`, user);
			return response;
		},
		deleteAllUsers: (_) => {
			let response = deleteDeleteAllUsers(URL);
			return response;
		}

	}
};

export default resolvers;
