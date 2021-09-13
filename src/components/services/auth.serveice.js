import axios from "axios"

const baseURL = "http://localhost:4000/api"

// register request
export const register = newUser => {
	// POST request on httP://localhost:4000/api/register
	return axios
		.post(`${baseURL}/register`, newUser)
		.then(response => {
			if (response.data) {
				return Promise.resolve(response.data)
			}
		})
		.catch(error => {
			console.log("auth register : ", error.response.data)
			return Promise.reject(error.response.data)
		})
}

export const login = userCrediential => {
	return axios
		.post(`${baseURL}/login`, userCrediential)
		.then(response => {
			if (response.data.token) {
				localStorage.setItem("x-access-token", response.data.token)
			}
			return Promise.resolve(response.data)
		})
		.catch(error => {
			return Promise.reject(error.response.data)
		})
}

// logout services
export const logout = () => {
	localStorage.removeItem("x-access-token")
	return {msg: "Logout Successfully...!"}
}
