import { useState } from "react";

import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user } = UserAuth()
	// console.log(user.username)
	return (
		<>
			<div className="navbar bg-indigo-600">
				<div className="flex-1">
					<a className="btn btn-ghost text-xl uppercase">Identity Hub</a>
				</div>
				<div className="flex-none gap-2">
					<div className="dropdown dropdown-end">
						<div tabIndex={0} className="flex items-center gap-x-2 cursor-pointer">
							<img
								className="object-cover w-8 h-8 rounded-lg"
								src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
								// src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
								alt=""
							/>
							<div>
								<h1 className="text-base font-semibold text-gray-700 capitalize dark:text-white">
									{user && user?.username}
								</h1>
								<p className="text-xs text-gray-300">
									miajohn@merakiui.com
								</p>
							</div>
						</div>

						<ul
							tabIndex={0}
							className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
