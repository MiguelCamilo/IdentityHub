import Navbar from "../components/Navbar";

import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
	// const { user } = UserAuth()
	// console.log(user)
	return (
		<div className="h-screen w-screen">
			<Navbar />
		</div>
	);
};

export default Dashboard;
