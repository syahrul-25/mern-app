import * as actionType from "./types"
import * as AuthService from "../components/services/auth.serveice"

// register action
export const registerAction = payload => dispatch => {
	return AuthService.register(payload)
		.then(response => {
			dispatch({
				type: actionType.REGISTER_SUCCESS,
				payload: response
			})
			return Promise.resolve(response)
		})
		.catch(err => {
			dispatch({
				type: actionType.REGISTER_FAIL,
				payload: {error: err.message}
			})
			return Promise.reject(err)
		})
}

// login action
export const loginAction = userCrediential => dispatch => {
	return AuthService.login(userCrediential)
		.then(data => {
			dispatch({
				type: actionType.LOGIN_SUCCESS,
				payload: data
			})
			return Promise.resolve(data)
		})
		.catch(err => {
			dispatch({
				type: actionType.LOGIN_FAIL,
				payload: {error: err}
			})
			// console.log(err.message)
			return Promise.reject(err)
		})
}

// logout action
export const logoutActions = () => dispatch => {
	const msg = AuthService.logout()
	dispatch({
		type: actionType.LOGOUT,
		payload: msg
	})
	return Promise.resolve(msg)
}
