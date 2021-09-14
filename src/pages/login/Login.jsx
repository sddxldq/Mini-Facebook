import React from "react";
import "./login.css";

function Login() {
	const handleClick = (e) => {
		e.preventDefault();
	};

	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">SecretLand</h3>
					<span className="loginDesc">There is no secrets in SecretLand.</span>
				</div>
				<div className="loginRight">
					<form onSubmit={handleClick} className="loginBox">
						<input placeholder="Email" type="email" className="loginInput" />
						<input
							placeholder="Password"
							type="password"
							className="loginInput"
						/>
						<button className="loginButton">Log In</button>
						<span className="loginForgot">Forgot Password?</span>
						<button className="loginRegusterButton">
							Create a new account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
