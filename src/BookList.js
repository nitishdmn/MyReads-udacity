import React from 'react'
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ name, books, onShelfChange }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.length === 0 ? <div>There are no books to display.</div>
                        : books.map(book => (
                            <BookItem book={book} onShelfChange={onShelfChange} key={book.id} />
                        ))}
                </ol>
            </div>
        </div>
    )
}

BookList.propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
    onShelfChange: PropTypes.func.isRequired
}

export default BookList;