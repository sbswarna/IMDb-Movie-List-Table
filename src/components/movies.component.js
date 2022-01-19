import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
import getGenres from "../service/get-genres.service";
import _ from "lodash";
import Pagination from "./common/pagination.component";
import Filter from "./common/filtering.component";

class Movies extends React.Component {
  state = {
    movies: [],
    sortColumn: { path: "id", order: "asc" },
	activePage: 1,
	pageCount: 5,
	genres: [],
	selectedGenre: "All Genres"
  };

  componentDidMount() {
    const movies = getMovies();
	const genres = ["All Genres", ...getGenres()];
    this.setState({ ...this.state, movies, genres });
  }

  handleToggleRating = (movieRank) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.id === movieRank);
    movie.your_rating = !movie.your_rating;
    this.setState({ ...this.state, movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn });
  };

  handleClickPage = (activePage) => {
	  this.setState({ ...this.state, activePage })
  }

  handleClickFilter = (selectedGenre) => {
	  this.setState({ ...this.state, selectedGenre });
  }

  paginateMovies = (movies) => {
	const { activePage, pageCount } = this.state;
	const start = (activePage - 1) * pageCount;
	const paginatedMovies = movies.slice(start, start + pageCount);
	return paginatedMovies;
  }

  filterMovies = () => {
	  const { movies, selectedGenre } = this.state;
	  const filteredMovies = movies.filter(movie => {
		  if(selectedGenre === "All Genres") return true;

		  if(movie.genres.includes(selectedGenre)) return true;
		  return false;
	  });
	  return filteredMovies;
  }

  sortMovies = (movies) => {
    const { sortColumn } = this.state;
    const sortedMovies = _.orderBy(
      movies,
      [sortColumn.path],
      [sortColumn.order]
    );
    return sortedMovies;
  };

  render() {
	const filteredMovies = this.filterMovies();
	const paginatedMovies = this.paginateMovies(filteredMovies);
    const movies = this.sortMovies(paginatedMovies);
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
	  	<div className="container">
			<div className="row">
				<Filter items={this.state.genres} selectedGenre={this.state.selectedGenre} onClickFilter={this.handleClickFilter}/>
				<div className="col-lg-8">
					<Table
						items={movies}
						columns={columns}
						onSort={this.handleSort}
						sortColumn={this.state.sortColumn}
					/>
					<Pagination totalItems={filteredMovies.length} pageCount={this.state.pageCount} activePage={this.state.activePage} onClickPage={this.handleClickPage}/>
				</div>
			</div>
		</div>
      </>
    );
  }
}

export default Movies;
