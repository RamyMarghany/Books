import './Input.scss';

type InputProps = {
    type?: "text" | "email" | "password" | "date" | "tel";
    value: string;
    className?: string;
    placeholder: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent) => void;
};

export const Input = ({ value, className, handleChange, type = "text", placeholder, onKeyPress }: InputProps) => {
    return <input className={`custome-input ${className = ""}`} value={value} onChange={handleChange} placeholder={placeholder} onKeyPress={onKeyPress} />;
};
