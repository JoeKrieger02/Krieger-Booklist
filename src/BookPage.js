import React from "react"
import "./App.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

class BookPage extends React.Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    this.props.books.map((book) => {
      return book
    })
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>KriegerReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter((book) => book.shelf === "currentlyReading")
                    .map((book, index) => {
                      return (
                        <li key={index}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage:
                                    'url("' + book.imageLinks.thumbnail + '")'
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select
                                  onChange={(event) => {
                                    this.props.updateShelf(
                                      book,
                                      event.target.value
                                    )
                                  }}
                                  value={book.shelf}
                                >
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )
                    })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter((book) => book.shelf === "wantToRead")
                    .map((book, index) => {
                      return (
                        <li key={index}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage:
                                    'url("' + book.imageLinks.thumbnail + '")'
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select
                                  onChange={(event) => {
                                    this.props.updateShelf(
                                      book,
                                      event.target.value
                                    )
                                  }}
                                  value={book.shelf}
                                >
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )
                    })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter((book) => book.shelf === "read")
                    .map((book, index) => {
                      return (
                        <li key={index}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage:
                                    'url("' + book.imageLinks.thumbnail + '")'
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select
                                  onChange={(event) => {
                                    this.props.updateShelf(
                                      book,
                                      event.target.value
                                    )
                                  }}
                                  value={book.shelf}
                                >
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )
                    })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/Search">Search</Link>
        </div>
      </div>
    )
  }
}

export default BookPage
