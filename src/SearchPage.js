import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
//import escapeRegExp from 'escape-string-regexp'
//import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'
//import updateShelf from './BookPage'


class SearchPage extends Component {	
  state = {
		query:'',
 		 books: []
	}

	static PropTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
    } 
	
	updateQuery = (query) => {
    this.setState({ query: query.trim() })
    }
/*
	clearQuery = () => {
     this.setState({ query:'' })
    }
*/
	componentWillUnmount(){
	BooksAPI.getAll().then((books) => {
		this.props.updateQuery("")
	})
}

render (){
  
  	//const { queriedBooks } = this.props

	const { query } = this.state
 /* 
	let showingBooks
	if (query) {
    	const match = new RegExp(escapeRegExp(query), 'i')
      	showingBooks = books.filter((books) => match.test(books.name))
    } else {
     showingBooks = books
    }
*/
  this.props.books.map((book) => {
      //console.log(book)
      return book 
    })

	return (
	<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/" >Close</Link>
              <div className="search-books-input-wrapper"> 
                <input 
					type="text" 
					value={this.state.query} 
					onChange={(event) => this.updateQuery(event.target.value)}
					placeholder="Search by title or author"
				/>
				<Link to='/'
				className='return'
				>Go Back</Link>

              </div>

            </div>
            <div className="search-books-results">
              	<ol className="books-grid">
                      {this.props.books
                      .filter((book) => book.title === BooksAPI.search(query))
                      .map((book, index) => (
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
                                  <select onChange={(event)=>{this.props.updateShelf(book,event.target.value);}} value={book.shelf}>
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
					))}
				</ol>
            </div>
          </div>
	)
}
}

export default SearchPage;
