const axios = require('axios');

export async function getUserById(url_auth_ms) {
	let response = await axios.get(url_auth_ms)
	return response.data
}

export async function getAllUsers(url_auth_ms) {
	let response = await axios.get(url_auth_ms)
	return response.data
}

export async function postCreateUser(url_auth_ms, user) {
	let response = await axios.post(url_auth_ms, user)
	return response.data
}

export async function deleteDeleteUser(url_auth_ms) {
	let response = await axios.delete(url_auth_ms)
	return response.data
}

export async function putUpdateUser(url_auth_ms, user) {
	let response = await axios.put(url_auth_ms, user)
	return response.data
}

export async function deleteDeleteAllUsers(url_auth_ms) {
	let response = await axios.delete(url_auth_ms)
	return response.data
}
