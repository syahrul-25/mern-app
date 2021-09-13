import React from "react"
import {Link, NavLink} from "react-router-dom"

export default function BaseLogin() {
	return (
		<div className="col-sm-5 bg-img align-self-center">
			<div className="info">
				<div className="logo clearfix">
					<Link to="/" className="nav-brand">
						Logo
					</Link>
				</div>
				<div className="btn-section clearfix">
					<NavLink to="/login" className="nav-link link-btn btn-primary default-bg">
						Login
					</NavLink>
					<NavLink to="/register" className="nav-link link-btn btn-primary default-bg">
						Register
					</NavLink>
				</div>
			</div>
		</div>
	)
}
