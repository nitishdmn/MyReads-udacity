import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import MainPage from './MainPage';

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: false
  }

  componentDidMount = () => {
    this.fetchAllBooks();
  }

  fetchAllBooks = () => {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .then(() => this.setState({ loading: false }))
  }

  // move book to a different shelf
  onShelfChange = async (book, shelfName) => {
    this.setState({ loading: true });
    await BooksAPI.update(book, shelfName)

    this.fetchAllBooks()
  }

  render() {
    return (
      <div className={`app ${this.state.loading && 'dimmed'}`}>
        <Route path="/search">
          <Search
            userBooks={this.state.books}
            onShelfChange={this.onShelfChange}
          />
        </Route>
        <Route exact path="/">
          <MainPage books={this.state.books} onShelfChange={this.onShelfChange} />
        </Route>
        <Route path="/login"><Login books={this.state.books} onShelfChange={this.onShelfChange}/></Route>

      </div>
    )
  }
}

export default BooksApp;
