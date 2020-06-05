import React from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

import BookList from './BookList';
import SearchBar from './SearchBar';

class Search extends React.Component {
    state = {
        searchValue: '',
        books: [],
        errorMessage: ''
    }

    // update search query
    handleChange = (searchValue) => {
        this.setState(() => ({ searchValue }), this.fetchBooks)
    }

    fetchBooks = async () => {
        const searchValue = this.state.searchValue.trim().toLowerCase();
        if (!searchValue) {
            return this.setState({ books: [], errorMessage: '' });
        }

        try {
            const books = await BooksAPI.search(searchValue)

            if (books.error) {
                this.setState({ books: [], errorMessage: 'Your search did not match any books.' })
            } else {
                this.setState({ books, errorMessage: '' });
            }
        } catch (err) {
            console.log(err);
        }
    }

    // checks if books that match the query are also added by the user to their lists
    getBooksWithShelves = () => {
        return this.state.books.map((book) => {
            const bookInParentState = this.props.userBooks.find((userBook) => userBook.id === book.id)
            const shelf = bookInParentState ? bookInParentState.shelf : "none"

            return { shelf: shelf, ...book }
        })
    }

    displaySuggestions = () => {
        const suggestions = ['Cricket', 'React', 'Artificial Intelligence', 'Android'];

        return suggestions.map(suggestion => (
            <li
                onClick={() => this.handleChange(suggestion)}
                key={suggestion}
                className="suggestion"
            >
                {suggestion}
            </li>
        ))
    }

    render() {
        const booksWithShelf = this.getBooksWithShelves();

        return (
            <div className="search-books">
                <SearchBar
                    query={this.state.searchValue}
                    handleChange={this.handleChange}
                />
                <div className="search-books-results">
                    <ul className="search-suggestions">Try: <span style={{ color: '#999' }}>{this.displaySuggestions()}</span></ul>
                    <BookList
                        books={booksWithShelf}
                        name="Search"
                        onShelfChange={this.props.onShelfChange}
                    />
                    <div style={{ 'textAlign': 'center' }}>{this.state.errorMessage}</div>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    userBooks: PropTypes.arrayOf(PropTypes.object),
    onShelfChange: PropTypes.func.isRequired
}

export default Search;
