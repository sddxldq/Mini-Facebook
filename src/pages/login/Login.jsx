import React, { useRef, useContext } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

function Login() {
	const email = useRef();
	const password = useRef();
	const { user, isFetching, dispatch } = useContext(AuthContext);
	const handleClick = (e) => {
		e.preventDefault();
		loginCall(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
	};
	console.log(user);

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
							minLength="6"
							className="loginInput"
						/>
						<button className="loginButton" type="submit" disabled={isFetching}>
							{isFetching ? <CircularProgress size="20px" /> : "Log In"}
						</button>
						<span className="loginForgot">Forgot Password?</span>
						<button className="loginRegisterButton">
							{isFetching ? (
								<CircularProgress size="20px" />
							) : (
								"Create a New Account"
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
