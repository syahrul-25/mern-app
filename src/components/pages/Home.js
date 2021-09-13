import React, {useEffect} from "react"
import Header from "../imports/Header"
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

export default function Home() {
	const user = useSelector(state => state.isLoggedIn)
	const history = useHistory()

	// if (!user) history.push("/login")
	const route = () => {
		const token = localStorage.getItem("x-access-token")
		return token ? true : false
	}

	useEffect(() => {
		if (!route()) {
			history.push("/login")
		}
	}, [route, history])

	return (
		<>
			<Header />
			<main>
				<div className="container">
					<h4>Welcome To Home Page</h4>
				</div>
			</main>
		</>
	)
}
