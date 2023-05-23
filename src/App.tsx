import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./context/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const navigate = useNavigate()
	
	useEffect(() => {
		const sessionToken = localStorage.getItem("AUTH");
		// if localStore returns null then user is not authenticated
		setIsAuthenticated(sessionToken !== null);
	}, []);

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/dashboard")
		}
	},[isAuthenticated, navigate]);

	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

				<Route
					path="/dashboard"
					element={
						<ProtectedRoute isAuthenticated={isAuthenticated}>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</AuthContextProvider>
	);
}

export default App;
