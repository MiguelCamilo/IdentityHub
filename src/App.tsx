import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</AuthContextProvider>
	);
}

export default App;
