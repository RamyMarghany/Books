// Components
import { Card } from "components/atoms/Card/Card";

// Type
import { Book } from "type/book";

// Context 
import { useAppContext } from "context/appContext";

// Style
import './BookCard.scss'
import { Button } from "components/atoms/Button/Button";

export const BookCard = ({ id, title, authors, genres, image_url, rating, redirectToBookDetails }: Book) => {

    const { checkFavouriteBook, removeFavouriteBook, addFavouriteBook } = useAppContext();

    return (
        <Card>
            {id && (
                <div className="book">
                    <h3 className="book__title">{title}</h3>
                    <p className="book__authors">{authors}</p>
                    <p className="book__date"></p>
                    <p className="book__categories">{genres?.split(',')[0]}</p>
                    <p className="book__rating">{rating}</p>
                    <button onClick={redirectToBookDetails}>
                        <img className="book__image" src={image_url} alt={title} width={150} />
                    </button>
                    {checkFavouriteBook(id) ?
                        <Button className="book__button--remove" onClickHandler={() => removeFavouriteBook(id)}>remove from favourite</Button>
                        : <Button className="book__button--add" onClickHandler={() => addFavouriteBook({ id, title, authors, genres, image_url, rating, redirectToBookDetails })}>add to favourite</Button>
                    }
                </div>
            )}
        </Card>
    )
}