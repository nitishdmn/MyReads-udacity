import React from 'react';
import PropTypes from 'prop-types';


class BookItem extends React.Component {
    
    onChangeSelect = (newShelf) => {
        this.props.onShelfChange(this.props.book, newShelf);
    }

    render() {
        const { book } = this.props;
        const hasImage = book.imageLinks ? book.imageLinks.smallThumbnail : '';

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ backgroundImage: `url(${hasImage})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf || 'none'} onChange={(e) => this.onChangeSelect(e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    <button className="button"><a href={book.previewLink}>Read</a></button>
                </div>
            </li>
        )
    }
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookItem;