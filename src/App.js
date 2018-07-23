import React  from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookPage from './BookPage'
import SearchPage from './SearchPage'
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  state= {
    books: []
   
  }

componentDidMount(){
	BooksAPI.getAll().then((books) => {
		this.setState({ books })
	})
}



updatedBook=(event, books)=> {
	this.setState({books: event.target.value})
  
}


/*
getShelf= (event, book) => {
  	const shelf = event.target.value;
  	event.preventDefault()
  	book.shelf = event.target.value
  	this.setState({ book })
	
	BooksAPI.update(book, shelf).then (updated => {
    	this.setState(state => ({
        book: state.book
          .filter(b => b.id !== book.id)
          .concat([book])
      }))
    })
  }

*/
  render() {
    return (
    <BrowserRouter>
      <div className="app">
      	<Route exact path="/" render={()=> (
    		<BookPage 
    			UpdatedBook={this.UpdatedBook}
				books={this.state.books}
			/>
		)}/>
		<Route path="/SearchPage" render={()=> (
      		<SearchPage
             	books={this.state.books}
				UpdatedBook={this.UpdatedBook}
			/>
		)}/>
	</div> 
</BrowserRouter>
    )
  }

}

export default App
