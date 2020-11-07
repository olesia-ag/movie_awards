import React, { useContext } from 'react';
import classes from './DisplayMovies.module.css';
import SingleMovie from '../SingleMovie/SingleMovie';
import { NominatedMoviesContext } from '../../context/nominated-movies-context';

const DisplayMovies = ({ movies, movieToFind }) => {
	const { addMovie, checkIfNominated, checkLimit } = useContext(
		NominatedMoviesContext
	);

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
};

export default DisplayMovies;
