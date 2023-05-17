import { Link } from "react-router-dom";

import Inputs from "../components/Inputs";
import Img from "../components/Img";
import Buttons from "../components/Buttons";

import "../App.css";

const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
}


const Register = () => {

    return (
        <>
            <>
			{/* Global Container */}
			<div className="h-full w-full md:w-[50%] fixed z-[1] top-0 overflow-hidden pt-20">
				{/* Card Container */}
				<div className="">
					{/* Left Side */}
					<div className="p-6 md:p-20 left-0">
						{/* Top Content */}
						<h2 className="font-mono mb-5 text-4xl font-bold">
							Come on in! 👋🏼
						</h2>
						<p className="max-w-sm mb-5 font-sans font-light text-gray-600">
							Glad you're here! Let's get you all set up, so you can start.
						</p>

						<form onSubmit={handleRegister}>
                            <Inputs 
                                type="text"
                                placeholder="Name"
                                required
                                className="block px-2.5 pb-2.5 pt-4 w-full my-2 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                            />
							<Inputs
								type="email"
								placeholder="Email"
								required
								className="block px-2.5 pb-2.5 pt-4 w-full my-2 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
							/>
							<Inputs
								type="password"
								placeholder="Password"
								required
								className="block px-2.5 pb-2.5 pt-4 w-full my-2 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
							/>

							{/* Middle Content */}
							<div className="flex flex-col items-center justify-between my-6 md:flex-row md:space-y-0">
								<div className="flex flex-col text-center font-thin text-indigo-700 hover:text-indigo-300 hover:duration-300 cursor-pointer">
									<span className="text-gray-500 text-sm font-thin">
										Already have an account?
									</span>{" "}

									<Link to="/">
										<span className="underline decoration-solid decoration-1 mb-2 sm:mb-0">
											Login
										</span>
									</Link>
                                    
								</div>

								<div className="font-thin text-indigo-700 hover:text-indigo-300 hover:duration-300 cursor-pointer">
									Forgot password?
								</div>
							</div>
							<Buttons className="flex w-full justify-center rounded-md gradient-bg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-90 hover:duration-300">
								<span>Create account</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 mt-[1px]"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="#ffffff"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<line x1={5} y1={12} x2={19} y2={12} />
									<line x1={13} y1={18} x2={19} y2={12} />
									<line x1={13} y1={6} x2={19} y2={12} />
								</svg>
							</Buttons>
						</form>

						{/* Border */}
						<div className="mt-12 border-b border-b-gray-300" />
						{/* Bottom Content */}
						<p className="py-6 text-sm font-thin text-center text-gray-400">
							or continue with
						</p>
						{/* Bottom Buttons Container */}
						<div className="flex flex-col space-x-0 space-y-6 md:flex-row ">
							<Buttons className="flex items-center justify-center w-full py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150">
								<Img src="/img/google.png" alt="" className="w-9" />
								<span className="font-thin">Sign up with Google</span>
							</Buttons>
						</div>
					</div>
					{/* Right Side */}
					<div className="h-full w-[50%] fixed z-[1] top-0 overflow-hidden right-0">
						<div className="w-full h-full gradient-bg hidden md:block" />
					</div>
				</div>
			</div>
		</>
        </>
    )
}

export default Register