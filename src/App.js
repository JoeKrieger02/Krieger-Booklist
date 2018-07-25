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
    books: [],
    queriedBooks: []
   
  }

headers = {
  'Authorization': "sai",   
  'Content-Type': 'application/json' 
}

componentDidMount(){
	BooksAPI.getAll().then((books) => {
		this.setState({ books })
		console.log(JSON.stringify(books))
	})
}
/*
findBook = (query) ={
 BooksAPI.search(query).then((result) => {
 this.setState({queriedBooks: []
               })}
*/
updateShelf=(book, shelf)=> {
	BooksAPI.update(book,shelf).then(()=>{
      //this.getBooks()
      BooksAPI.getAll().then((books)=>{
      this.setState({ books })
    })
    })

  }



  render() {
    return (
    <BrowserRouter>
      <div className="app">
      	<Route exact path="/" render={()=> (
    		<BookPage 
    			updateShelf={this.updateShelf}
				books={this.state.books}
			/>
		)}/>
		<Route path="/Search" render={()=> (
      		<SearchPage
             	books={this.state.books}
				updateShelf={this.updateShelf}
			/>
		)}/>
	</div> 
</BrowserRouter>
    )
  }

}

export default App
