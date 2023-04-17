// Modules
import { Route, Routes } from "react-router-dom";

// Components
import { Home } from "pages/Home/Home";
import { FavouriteBooks } from "pages/FavouriteBooks/FavouriteBooks";
import { BookDetails } from "pages/BookDetails/BookDetails";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/favouritebooks" element={<FavouriteBooks />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};
