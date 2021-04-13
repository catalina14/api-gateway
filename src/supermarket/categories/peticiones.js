const axios = require('axios');

export async function getUserById(url_auth_ms) {
	let response = await axios.get(url_auth_ms)
	return response.data
}