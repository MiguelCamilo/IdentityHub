interface ButtonsProps {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}

const Buttons: React.FC <ButtonsProps> = ({ className, onClick, children }) => {

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Buttons;