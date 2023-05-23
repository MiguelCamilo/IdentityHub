import React, { useState, useContext } from "react";

import { API_ROUTES } from "../env.config";

interface AuthContextProviderProps {
	children?: React.ReactNode;
}

type User = {
	username: string;
	email: string
}

const AuthContext = React.createContext({
	username: "",
	setUsername: (() => {""}) as React.Dispatch<React.SetStateAction<string>>,
	email: "",
	setEmail: (() => {""}) as React.Dispatch<React.SetStateAction<string>>,
	password: "",
	setPassword: (() => {""}) as React.Dispatch<React.SetStateAction<string>>,
	errors: false,
	errorMessage: "",
	handleLogin: () => {null},
	user: {} as User,
  });
  
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [user, setUser] = useState <User> ({} as User);
	const [errors, setErrors] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleClearInputs = () => {
		setUsername("")
		setEmail("")
		setPassword("")
	}
	const handleLogin = () => {

		fetch(API_ROUTES.LOGIN_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((res) => {
				if (!res.ok) {
					res.json().then((data) => {
						setErrors(true);
						// data is an obj that has the key "message"
						// so it shouldnt be data.error
						setErrorMessage(data.message);
					});
				} else {
					res.json().then((data) => {
						// console.log(data);						
						localStorage.setItem("AUTH", data.authentication.sessionToken)
						setUser(data)
						setErrors(false)
						setErrorMessage("");
						handleClearInputs()						
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
    
	return (
		<>
			<AuthContext.Provider
				value={{
					username,
					setUsername,
					email,
					setEmail,
					password,
					setPassword,
					errors,
					errorMessage,
					handleLogin,
					user,
				}}
			>
				{children}
			</AuthContext.Provider>
		</>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
