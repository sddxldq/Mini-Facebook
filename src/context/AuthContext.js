import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: {
		_id: "61a35c294fa5a6a4165e90da",
		username: "Daqian",
		email: "daqian@gmail.com",
		password: "$2b$10$7VXw/tejWZzXhy0y7Bd1juFqjEwDwCTR0fDS12u1DSxPUnxcFVaTe",
		profilePicture: "person/psbe.jpg",
		isAdmin: false,
		desc: "Hello I am a mechanical engineer",
		followers: ["61a349bda63e586bb9fcc67c", "61a352febf5193bc188eb8d7"],
		followings: ["61a349bda63e586bb9fcc67c", "61a352febf5193bc188eb8d7"],
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
