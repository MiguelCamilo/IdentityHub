interface InputsProps {
	type?: string;
	placeholder?: string;
	required?: boolean;
}

const Inputs: React.FC<InputsProps> = ({ type, placeholder, required }) => {
	return (
		<div className="relative">
			<input
				type={type}
				id="floating_outlined"
				className="block px-2.5 pb-2.5 pt-4 w-full my-2 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
				placeholder=" "
                required={required}
			/>
			<label
				htmlFor="floating_outlined"
				className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
			>
				{placeholder}
			</label>
		</div>
	);
};

export default Inputs;

