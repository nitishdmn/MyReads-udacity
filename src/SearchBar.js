import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SearchBar({ query, handleChange }) {
    return (
        <div className="search-books-bar">
            <Link to="/">
                <button className="close-search">Close</button>
            </Link>
            <div className='search-books-input-wrapper'>
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    query: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default SearchBar;
