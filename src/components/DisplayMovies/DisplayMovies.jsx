import React, { useContext } from 'react';
import classes from './DisplayMovies.module.css';
import SingleMovie from '../SingleMovie/SingleMovie';
import { NominatedMoviesContext } from '../../context/nominated-movies-context';

const DisplayMovies = ({ loading, movies, error, movieToFind }) => {
	const { addMovie, checkIfNominated, checkLimit } = useContext(
		NominatedMoviesContext
	);
	if (!movies.length) return null;
	else if (loading) return <p>searching...</p>;
	else if (error) return <p>{error.message}</p>;
	else {
		return (
			<div className={classes.DisplayMoviesContainer}>
				<h5>Found for '{movieToFind}':</h5>
				<ul>
					{movies.map((movie) => (
						<li key={movie.imdbID}>
							<SingleMovie
								title={movie.Title}
								id={movie.imdbID}
								poster={movie.Poster}
								released={movie.Year}
								nominate={() => addMovie(movie)}
								disable={checkIfNominated(movie.imdbID) || checkLimit()}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
};

export default DisplayMovies;
