import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: {
		_id: "613535aee2064722ca3dc1a3",
		username: "Alfred",
		email: "alfred@gmail.com",
		password: "$2b$10$wP0nf./KIIGMp/IPCc/9vOuTHu4pOj/AM6rq47JIdjegShZz9wveW",
		profilePicture: "person/psbe.jpg",
		isAdmin: false,
		desc: "Hello I am a mechanical engineer",
		followers: ["613535d3e2064722ca3dc1a5", "613535ebe2064722ca3dc1a7"],
		followings: ["613535d3e2064722ca3dc1a5", "613535ebe2064722ca3dc1a7"],
		createdAt: { $date: { $numberLong: "1630877102817" } },
		updatedAt: { $date: { $numberLong: "1630877379108" } },
		__v: { $numberInt: "0" },
		city: "Beijing",
		from: "Vancouver",
		coverPicture: "",
	},
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
