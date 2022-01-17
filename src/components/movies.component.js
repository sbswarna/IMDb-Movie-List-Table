import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    movies: [],
    sortColumn: { path: "id", order: "asc" },
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handleToggleRating = (movieRank) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.id === movieRank);
    movie.your_rating = !movie.your_rating;
    this.setState({ movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn });
  };

  sortMovies = (movies) => {
    const {sortColumn} = this.state;
    const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
    return sortedMovies;
  } 

  render() {
    const movies = this.sortMovies(this.state.movies);
    const columns = [
      {
        label: "Rank",
        path: "id",
        sorting: true,
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Title",
        path: "title",
        sorting: true,
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Poster",
        path: "posterUrl",
        content: (movie, key) => (
          <td>
            <img src={movie[key]} style={{ height: "100px", width: "auto" }} />
          </td>
        ),
      },
      {
        label: "Your Rating",
        path: "your_rating",
        content: (movie, key) => (
          <td>
            <Rating
              isRated={movie[key]}
              rank={movie.id}
              handleToggleRating={this.handleToggleRating}
            />
          </td>
        ),
      },
      {
        label: "Action",
        path: "action",
        content: (movie, key) => <td>{movie[key]}</td>,
      },
    ];
    return (
      <>
        <Table
          items={movies}
          columns={columns}
          onSort={this.handleSort}
          sortColumn={this.state.sortColumn}
        />
      </>
    );
  }
}

export default Movies;
