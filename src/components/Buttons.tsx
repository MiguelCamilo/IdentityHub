interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}

const Buttons: React.FC <ButtonsProps> = ({ type, className, onClick, children, ...props }) => {

    return (
        <button
            {...props}
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Buttons;

/* 
    When you create an interface that extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    you are telling TypeScript that your interface should include all the properties that an HTML button element can have.

    Also type doesn't need to be included in the interface since it's being extended from React.ButtonHTMLAttributes 
*/