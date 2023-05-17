interface InputsProps {
	type?: string | undefined;
	placeholder?: string;
	required?: boolean;
    className?: string;
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ type, placeholder, required, className, value, onChange }) => {
	return (
		<div className="relative">
			<input
				type={type}
				className={className}
				placeholder=" "
                required={required}
				value={value}
				onChange={onChange}
			/>
			<label				
				className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
			>
				{placeholder}
			</label>
		</div>
	);
};

export default Inputs;

