// Modules
import React, { useState, createContext, useContext } from "react";

// Type
import { Book } from "type/book";

type usefavouriteBookContext = {
    favouriteBooks: Book[];
    addFavouriteBook: (book: any) => void;
    removeFavouriteBook: (id: number) => void;
    checkFavouriteBook: (id: number) => boolean;

};


const AppContext = createContext({} as usefavouriteBookContext);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('App Context should come with AppContextProvider.')
    }
    return context;
}

export const AppContextProvider = ({ children }: any) => {
    const [favouriteBooks, setFavouriteBooks] = useState<Book[]>([])

    const addFavouriteBook = (book: Book) => {
        setFavouriteBooks([...favouriteBooks].concat(book));
    }

    const removeFavouriteBook = (id: number) => {
        setFavouriteBooks([...favouriteBooks].filter(book => book.id !== id))
    }

    const checkFavouriteBook = (id: number) => {
        return favouriteBooks.some(book => book.id === id)
    }

    return (
        <AppContext.Provider value={{ favouriteBooks, addFavouriteBook, removeFavouriteBook, checkFavouriteBook }}>
            {children}
        </AppContext.Provider>
    )
}

