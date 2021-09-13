import React from "react"

export default function RegisterForm(props) {
	let {setUsername, setEmail, setPassword, setPasswordCheck, handlerSubmit} = props.registerDispatch
	let {username, email, passwordCheck, password} = props.registerData

	return (
		<div className="col-sm-7 bg-color align-self-center">
			<div className="form-section">
				<div className="title">
					<h3>Create a new account</h3>
				</div>
				<div className="login-inner-form">
					<form method="POST" onSubmit={handlerSubmit}>
						<div className="form-group form-box">
							<input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} className="input-text" placeholder="Username" />
							<i className="icon user"></i>
						</div>
						<div className="form-group form-box">
							<input type="text" name="email" id="email" className="input-text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
							<i className="icon email"></i>
						</div>
						<div className="form-group form-box">
							<input type="password" name="password" id="password" className="input-text" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password" />
							<i className="icon lock"></i>
						</div>
						<div className="form-group form-box">
							<input type="password" name="password_check" id="password_check" className="input-text" value={passwordCheck} placeholder="Verify password" onChange={e => setPasswordCheck(e.target.value)} />
							<i className="icon lock"></i>
						</div>

						<div className="form-group">
							<button className="btn primary-btn">Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
