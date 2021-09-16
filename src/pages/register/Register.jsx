import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import "./register.css";

function Register() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef();
	const history = useHistory();

	const handleClick = async (e) => {
		e.preventDefault();
		if (passwordAgain.current.value !== password.current.value) {
			passwordAgain.current.setCustomValidity("Passwords don't match!");
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value,
			};
			try {
				await axios.post("/auth.register", user);
				history.push("/login");
			} catch (err) {
				console.log(err);
			}
		}
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
						<input
							placeholder="Username"
							required
							ref={username}
							className="loginInput"
						/>
						<input
							placeholder="Email"
							type="email"
							required
							ref={email}
							className="loginInput"
						/>
						<input
							placeholder="Password"
							type="password"
							required
							ref={password}
							className="loginInput"
							min="6"
						/>
						<input
							placeholder="Password Again"
							type="password"
							required
							ref={passwordAgain}
							className="loginInput"
							min="6"
						/>
						<button className="loginButton" type="submit">
							Sign Up
						</button>
						<button className="loginRegusterButton">
							Log into you account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
