import { useState } from "react";

const Navbar = () => {
	return (
		<>
			<div className="navbar bg-indigo-600">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
				</div>
				<div className="flex-none gap-2">                    
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                            <span className="text-3xl">K</span>
							</div>
						</label>
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
