// Modules
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// Type
import { Book } from "type/book";

// Constants
import { API_URL } from "constants/API";

// Context
import { useAppContext } from "context/appContext";

// Components
import { BookCard } from "components/molecules/BookCard/BookCard";
import { Aside } from "components/molecules/Aside/Aside";
import { Input } from "components/atoms/Input/Input";
import { List } from "components/atoms/List/List";
import { Spinner } from "components/atoms/Spinner/Spinner";
import { ErrorMessage } from "components/atoms/ErrorMessage/ErrorMessage";
import { Pagination } from "components/molecules/Pagination/Pagination";

// Styles
import './Home.scss';

export const Home = () => {
    const [search, setSearch] = useState<string>('');
    const [books, setBooks] = useState<Book[]>([]);
    const [pageCount, setpageCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState<any>('');
    let limit = 8;

    // Context Values
    const { addFavouriteBook } = useAppContext();

    // Navigation
    const navigattion = useNavigate();

    // Fetch all books
    useEffect(() => {
        const getBooks = async () => {
            const res = await fetch(
                `${API_URL}?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(Number(total) / limit));
            setBooks(data);
        }
        getBooks();
    }, [limit]);

    // Fetch all books for each page
    const fetchBooks = async (currentPage: number) => {
        const res = await fetch(
            `${API_URL}?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    // Handle page click
    const handlePageClick = async (evt: any) => {
        let currentPage = evt.selected + 1;
        const booksFromServer = await fetchBooks(currentPage);
        setBooks(booksFromServer);
    };

    // Handle Search Result
    const searchBook = (evt: React.KeyboardEvent) => {
        if (evt.key === "Enter") {
            axios.get(`${API_URL}?q=${search}`)
                .then(res => {
                    setBooks(res.data)
                })
                .catch(err => setErrorMessage(err))
        }
    }




    return (
        <div className="main-wrapper">
            <Aside>
                <List listContent={['Option 1', 'Option 2', 'Option 3']} />
            </Aside>
            <main className="main-wrapper__container">
                <nav className="main-wrapper__header">
                    <h3 className="main-wrapper__title">Books</h3>
                    <Input placeholder="Enter your book name..." value={search} handleChange={e => setSearch(e.target.value)}
                        onKeyPress={searchBook} />
                </nav>
                <div className="search-result">
                    {errorMessage ? <ErrorMessage>{errorMessage.message}</ErrorMessage> :
                        books.length > 0 ? (
                            books.map((book: Book) => (
                                <BookCard {...book} key={book.id} onClick={() => addFavouriteBook(book)} redirectToBookDetails={() => navigattion(`books/${book.id}`)} />
                            ))
                        ) : (
                            <Spinner />
                        )
                    }
                </div>
                <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </main>
        </div>
    )
}