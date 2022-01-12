import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";

class Movies extends React.Component {
    state = {
        movies: []        
    }

    componentDidMount() {
      const movies = getMovies();
      this.setState({ movies });
    }

    handleToggleRating = movieRank => {
      const movies = [...this.state.movies];
      const movie = movies.find(movie => movie.id === movieRank)
      movie.your_rating = !(movie.your_rating);
      this.setState({ movies });
    }

  render() {
    const columns = [
        {
          label: 'Rank', 
          path: 'id', 
          content: (movie,key) => <td>{movie[key]}</td> 
        },
        {
          label: 'Title', 
          path: 'title', 
          content:(movie,key) => <td>{movie[key]}</td> 
        },
        {
          label: 'Poster', 
          path: 'posterUrl', 
          content: (movie,key) => <td><img src={movie[key]} style={{ height: "100px", width: "auto" }}/></td> 
        },
        {
          label: 'Your Rating', 
          path: 'your_rating', 
          content: (movie,key) => <td><Rating 
                                        isRated={movie[key]} 
                                        rank={movie.id} 
                                        handleToggleRating={this.handleToggleRating}/>
                                  </td> },
        {
          label: 'Action', 
          path: 'action', 
          content: (movie,key) => <td>{movie[key]}</td> 
        }
    ]
    return (
      <>
        <Table data={this.state.movies} columns={columns}/>
      </>
    );
  }
}

export default Movies;
