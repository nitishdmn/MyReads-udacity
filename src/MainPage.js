import React from 'react';
import PropTypes from 'prop-types';
import OpenSearchBtn from './OpenSearchBtn';
import BookList from './BookList';
import LoginPage from './Auth';
import LoginBtn from './Loginbtn';



class MainPage extends React.Component {
    // find all books by their shelf
    filterBooks = (shelfName) => {
        return this.props.books.filter(book => book.shelf === shelfName)
    }


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>[ Bookshelf ]</h1>
                </div>
                <div className="login"><LoginBtn /></div>
                <div className="login"><LoginPage /></div>
                <div>
                    <div className="list-books-content">
                        <div>
                            <BookList
                                name="Currently Reading"
                                books={this.filterBooks('currentlyReading')}
                                onShelfChange={this.props.onShelfChange}
                            />
                            <BookList name="Want to Read"
                                books={this.filterBooks('wantToRead')}
                                onShelfChange={this.props.onShelfChange} />
                            <BookList
                                name="Read"
                                books={this.filterBooks('read')}
                                onShelfChange={this.props.onShelfChange}
                            />
                        </div>
                    </div>
                    <OpenSearchBtn />
                    
                </div>
            </div>
        )
    }
}

MainPage.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    onShelfChange: PropTypes.func.isRequired
}

export default MainPage;
