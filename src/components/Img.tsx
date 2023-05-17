interface ImgProps {
    src: string;
    alt?: string;
    className?: string;
}

const Img: React.FC <ImgProps> = ({ src, alt, className}) => {

    return (
        <img
            src={src}
            className={className}
            alt={alt}
        />
    )
}

export default Img