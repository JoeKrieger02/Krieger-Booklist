import React, { Component } from "react"
import * as BooksAPI from "./BooksAPI"
import "./App.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

class SearchPage extends Component {
  state = {
    query: "",
    books: [],
    showingBooks: []
  }

  static PropTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  getCurrentShelf(item) {
    let currentShelf = "none"

    this.props.books.map((book) => {
      if (item.id === book.id) {
        currentShelf = book.shelf
      }
      return currentShelf
    })
    return currentShelf
  }

  ComponentWillUnmount() {
    this.props.updateQuery("")
  }

  updateQuery = (event) => {
    const query = event.target.value //.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 30).then((books) => {
        if (books.length >= 1 && !books.error) {
          this.setState({ showingBooks: books })
        } else if (books.error) {
          console.log("error, no books found")
          this.setState({ showingBooks: [] })
        } else {
          console.log("no books found")
          this.setState({ showingBooks: [] })
        }
      })
    }
  }

  render() {
    const { query, showingBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={this.updateQuery}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book, id) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          book.imageLinks === undefined
                            ? 'url("  http://via.placeholder.com/128x193?text=No%20Cover  ")'
                            : 'url("' + book.imageLinks.thumbnail + '")'
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        onChange={(event) => {
                          this.props.updateShelf(book, event.target.value)
                        }}
                        defaultValue={this.getCurrentShelf(book)}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          {" "}
                          Currently Reading{" "}
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read"> Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.authors ? book.authors.join(", ") : ""}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
