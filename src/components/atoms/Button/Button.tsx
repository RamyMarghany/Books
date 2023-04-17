import { ReactNode } from "react"

type buttonProps = {
    children: ReactNode;
    onClickHandler?: () => void;
    className?: string;
}

export const Button = ({ children, onClickHandler, className }: buttonProps) => {
    return (
        <button className={`${className} button`} onClick={onClickHandler}>{children}</button>
    )
}