// Modules
import { useNavigate } from 'react-router-dom';

// Components
import { BookCard } from "components/molecules/BookCard/BookCard";

// Context
import { useAppContext } from "context/appContext";


// Type
import { Book } from "type/book";

// Styles
import './FavouriteBooks.scss';

export const FavouriteBooks = () => {
    const { favouriteBooks } = useAppContext();

    // Navigation
    const navigattion = useNavigate();

    return (
        <div className="favourite-wrapper">
            {favouriteBooks.length > 0 ? (
                favouriteBooks.map((book: Book) => (
                    <BookCard {...book} key={book.id} redirectToBookDetails={() => navigattion(`../books/${book.id}`, { replace: true })} />
                ))
            ) : (<h2 className="favourite-wrapper__title">you don't have any favourite Books...yet!</h2>)}
        </div>
    )
}