import React from "react"
import * as BooksAPI from "./BooksAPI"
import "./App.css"
import { Route } from "react-router-dom"
import BookPage from "./BookPage"
import SearchPage from "./SearchPage"
import { BrowserRouter } from "react-router-dom"

class App extends React.Component {
  state = {
    books: []
  }

  headers = {
    Authorization: "Joach"
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <BookPage
                updateShelf={this.updateShelf}
                books={this.state.books}
              />
            )}
          />
          <Route
            path="/Search"
            render={() => (
              <SearchPage
                books={this.state.books}
                updateShelf={this.updateShelf}
              />
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
