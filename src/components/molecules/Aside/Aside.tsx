import './Aside.scss';

type AsideProps = {
    children: React.ReactNode;
};

export const Aside = ({ children }: AsideProps) => {
    return (
        <aside className="left-aside">
            {children}
        </aside>
    )
}