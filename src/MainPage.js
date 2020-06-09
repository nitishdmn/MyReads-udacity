import React from 'react';
import PropTypes from 'prop-types';
import OpenSearchBtn from './OpenSearchBtn';
import BookList from './BookList';
import LoginBtn from './Loginbtn';



class MainPage extends React.Component {
    // find all books by their shelf
    filterBooks = (shelfName) => {
        return this.props.books.filter(book => book.shelf === shelfName)
    }
    changeLoginStatus = () => {
        sessionStorage.setItem("login", "false");
        this.setState({
          username: "",
          password: "",
        });
      };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <div className="foo">
                    <span className="letter" data-letter="B">B</span>
                    <span className="letter" data-letter="O">O</span>
                    <span className="letter" data-letter="O">O</span>
                    <span className="letter" data-letter="K">K</span>
                    <span className="letter" data-letter="S">S</span>
                    <span className="letter" data-letter="H">H</span>
                    <span className="letter" data-letter="E">E</span>
                    <span className="letter" data-letter="L">L</span>
                    <span className="letter" data-letter="F">F</span>
                </div>
                </div>
                <div className="login">{sessionStorage.getItem("login")==="true" ? (
            <div> <div>{sessionStorage.getItem("email")}</div>  
            <button className="btn" onClick={this.changeLoginStatus}>Sign Out</button>
            </div>
         
        ) : (
                <div className="login"><LoginBtn /></div>
        )}</div>
                
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
