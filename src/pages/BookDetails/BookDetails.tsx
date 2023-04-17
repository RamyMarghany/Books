// Modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Constants
import { API_URL } from "constants/API";

// Type
import { Book } from "type/book";

// Styles
import './BookDetails.scss';
import { Spinner } from 'components/atoms/Spinner/Spinner';

export const BookDetails = () => {
    const [bookDetails, setBookDetails] = useState<Book>();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                setBookDetails(res.data)
            }).catch(err => console.log(err));
    }, [id])

    return (
        bookDetails ? (
            <section className="book-wrapper">
                <img className="book-wrapper__image" alt={bookDetails?.title} src={bookDetails?.image_url} />
                <div className="book-wrapper__details">
                    <div className="book_wrapper__heading">
                        <h2 className="book-wrapper__title">{bookDetails?.title}</h2>
                        <p className="book-wrapper__rating">{bookDetails?.rating}</p>
                    </div>
                    <p className="book-wrapper__genres">{bookDetails?.genres}</p>
                    <p className="book-wrapper__describtion">{bookDetails?.description}</p>
                    <p className="book-wrapper__num-pages"><span>Number of pages: </span> {bookDetails?.num_pages}</p>
                </div>
            </section>
        ) : <Spinner />
    )
}