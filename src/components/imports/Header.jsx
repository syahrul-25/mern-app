import React from "react"
import {Link} from "react-router-dom"
import Logout from "./Logout"

import {logoutActions} from "../../container/actions"
import {useDispatch} from "react-redux"

export default function Header() {
	const dispatch = useDispatch()
	const logout = () => {
		dispatch(logoutActions())
	}

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
				<Link className="nav-link brand mx-auto" to="">
					<h5 className="text-light m-0">MERN Stack Application</h5>
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
					<i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="me-auto"></div>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Logout onLogout={logout} />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}
