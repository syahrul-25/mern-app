import React, {useState} from "react"
import BaseLogin from "../imports/BaseLogin"
import LoginForm from "../imports/LoginForm"

import {useDispatch, useStore} from "react-redux"
import {loginAction} from "../../container/actions"
import {useHistory} from "react-router-dom"

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const dispatch = useDispatch()
	const store = useStore()
	const history = useHistory()

	const handlerSubmit = e => {
		e.preventDefault()
		const newLogin = {email, password}

		const userdata = {email: "min@gmail.com", password: "admin123"}

		const login = dispatch(loginAction(userdata))

		login
			.then(data => history.push("/"))
			.catch(error => {
				// console.log(error)
				setErrorMessage(error.error)
			})

		console.log(store.getState())

		setEmail("")
		setPassword("")
	}

	let loginDispatch = {setEmail, setPassword, handlerSubmit, setErrorMessage}
	let loginData = {email, password, errorMessage}

	return (
		<div id="login">
			<div className="container">
				<div className="row login-box">
					<BaseLogin />
					<LoginForm loginDispatch={loginDispatch} loginData={loginData} />
				</div>
			</div>
		</div>
	)
}
