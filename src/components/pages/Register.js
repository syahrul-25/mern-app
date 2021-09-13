import React, {useState} from "react"

import {useDispatch} from "react-redux"
import {registerAction} from "../../container/actions"
import BaseLogin from "../imports/BaseLogin"
import RegisterForm from "../imports/RegisterForm"

import {useHistory} from "react-router-dom"

export default function Register() {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordCheck, setPasswordCheck] = useState("")
	const dispatch = useDispatch()
	const history = useHistory()

	const handlerSubmit = e => {
		e.preventDefault()
		const newUser = {username, email, password, passwordCheck}
		const user = {username: "admin", email: "admin@gmail.com", password: "admin123", passwordCheck: "admin123"}
		const validate = dispatch(registerAction(user))
		validate
			.then(data => {
				history.push("/login")
			})
			.catch(error => {
				console.log(error)
			})
		setUsername("")
		setPassword("")
		setEmail("")
		setPasswordCheck("")
	}

	let registerDispatch = {
		setUsername,
		setEmail,
		setPassword,
		setPasswordCheck,
		handlerSubmit
	}

	let registerData = {
		username,
		email,
		passwordCheck,
		password
	}

	return (
		<div id="login">
			<div className="container">
				<div className="row login-box">
					<BaseLogin />
					<RegisterForm registerDispatch={registerDispatch} registerData={registerData} />
				</div>
			</div>
		</div>
	)
}
