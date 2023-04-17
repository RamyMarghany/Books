import './List.scss';

export type ListProps = {
    listContent: string[];
    className?: string
};

export const List = ({ listContent, className }: ListProps): JSX.Element => {
    return (
        <ul className={`list ${className = ""}`} >
            {listContent?.map((listItem, index) => (
                <li key={index}>{listItem}</li>
            ))}
        </ul>
    )
}
