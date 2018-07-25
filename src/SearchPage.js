import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
//import escapeRegExp from 'escape-string-regexp'
//import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'
//import updateShelf from './BookPage'
import sortBy from 'sort-by'


class SearchPage extends Component {	
  state = {
		query:'',
 		 books: []
    
	}

constructor(props) { 
  	super(props)
	this.showingBooks = []
}

	static PropTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
    } 


updateQuery = (query) => {
    this.setState({ query: query.trim() })
    }


                             
render (){
 /*
	const { query } = this.state

	const { books } = this.props
	//let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      this.showingBooks = books.filter((book) => match.test(book.title))
    } else {
      this.showingBooks = books
    }

	this.showingBooks.sort(sortBy('title'))
*/
	const {query} = this.state
  	//const { books } = this.props
  
  if(query) {
  BooksAPI.search(query,30).then((books) => {
	this.showingBooks= books
  })}


	return (
      
<div className="search-books">
	            <div className="search-books-bar">
              <Link className="close-search" to="/" >Close</Link>
              <div className="search-books-input-wrapper"> 
                <input 
					type="text" 
					value={query} 
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
                     
						{this.showingBooks.map((book, index) => (
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
