import React from 'react';
import DisplayMovie from './DisplayMovie/DisplayMovie';
import classes from './DisplayMovies.module.css'

const DisplayMovies = ({ loading, movies, error}) => {
	let showMovies = <p>results will appear here</p>;

	if (loading) {
		showMovies = <p>Searching</p>;
	} else if (error) {
		showMovies = error.message;
	} else if(movies){
		showMovies = movies.map((movie) => (
			<DisplayMovie
				key={movie.imdbID}
				title={movie.Title}
				id={movie.imdbID}
				released={movie.Year}
			/>
		));
	}

	return <div className={classes.FoundMoviesContainer}>{showMovies}</div>;
};

export default DisplayMovies;
