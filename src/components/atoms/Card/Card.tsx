import './Card.scss';

export type CardProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export const Card = ({ children, onClick, className }: CardProps): JSX.Element => {

    return (
        <div className={`card ${className = ""}`} onClick={onClick} >
            {children}
        </div>
    )
}