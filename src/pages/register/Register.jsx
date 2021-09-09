import React from "react";
import "./register.css";

function Register() {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">SecretLand</h3>
					<span className="loginDesc">There is no secrets in SecretLand.</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input placeholder="Username" className="loginInput" />
						<input placeholder="Email" className="loginInput" />
						<input placeholder="Password" className="loginInput" />
						<input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegusterButton">
                            Log into you account
                        </button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
