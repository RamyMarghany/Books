import './ErrorMessage.scss'

export type ErrorMessageProps = {
    children: React.ReactNode;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return (
        <div className="error-message">
            <h3>
                {children}
            </h3>
        </div>
    )
}

