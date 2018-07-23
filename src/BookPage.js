import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import App from './App'
//import PropTypes from 'prop-types'

class BookPage extends React.Component {
	state = {
		query:"",
 		 book: []
	}


render (){
  	const { book } = this.props
	const {updatedBook} = this.props
/*
	const currentlyReading = book.filter(book => book.shelf === "currentlyReading" )
	const read = book.filter(book => book.shelf === "read")
    const wantToRead = book.filter(book => book.shelf === "wantToRead")
*/

return (
  
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

  
                      <li>
                        <div className="book">
                          <div className="book-top">
  							<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url` }}></div>
                            <div className="book-shelf-changer">
                              	<select 
									value={book.shelf}
									onChange={(event) => updatedBook(event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      <li>



                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => {console.log(event.target.value);}} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>



                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => {console.log(event.target.value);}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      <li>



                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => {console.log(event.target.value);}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>



                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => {console.log(event.target.value);}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => {console.log(event.target.value);}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              	<Link
            		to="/Search">
           			Search
           		</Link>
            </div>
          </div>
        )}
}

export default BookPage;
