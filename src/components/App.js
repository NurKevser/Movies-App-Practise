import React from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';


class App extends React.Component {
    state = {
        movies: [
            
        ],

        searchQuery: ""
        
    }


    async componentDidMount() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6e2e71c5acfa466c4f0c394c317110c8&language=en-US&page=1")
        console.log(response.data.results);
        this.setState({movies: response.data.results})
    }

    deleteMovie = (movie) => {
        axios.delete(`https://api.themoviedb.org/3${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
            );

            /* this.setState ({
                movies: newMovieList
            }) */ //bu şablon genelde önceki state durumu boş array old kullanılır

            this.setState(state => ({
                movies: newMovieList
            }))
    }

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render () {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie}/>
                    </div>
                </div>
                <MovieList 
                movies={filteredMovies}
                deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}


export default App;