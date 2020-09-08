import React, { useState, useContext } from 'react';
import { NominatedMoviesContext } from '../../context/nominated-movies-context';
import NominatedMovie from './NominatedMovie/NominatedMovie';
import Button from '../../components/UI/Button/Button';
import classes from './NominatedMovies.module.css';

const NominatedMovies = (props) => {
	//moviestoremove will only contain id of the movies that should be removed
	const [moviesToRemove, setMoviesToRemove] = useState([]);
	const moviesContext = useContext(NominatedMoviesContext);

	const markForDeletion = (event, id) => {
		event.preventDefault();
		const updatedMoviesToRemove = [...moviesToRemove];
		updatedMoviesToRemove.push(id);
		setMoviesToRemove(updatedMoviesToRemove);
	};

	const unmarkForDeletion = (event, id) => {
		event.preventDefault();
		const updatedMoviesToRemove = moviesToRemove.filter(
			(movieId) => movieId !== id
		);
		setMoviesToRemove(updatedMoviesToRemove);
	};

	const submitDeletion = (event) => {
		event.preventDefault();
		moviesContext.removeMovies(moviesToRemove);
		setMoviesToRemove([]);
	};

	let displayMovies;
	if (moviesContext.movies.length === 0) {
		displayMovies = <p>Nominated movies will appear here</p>;
	} else {
		displayMovies = (
			<>
				<ol>
					{moviesContext.movies.map((movie) => {
						return (
							<li key={movie.id}>
								<NominatedMovie
									movieId={movie.id}
									title={movie.title}
									released={movie.released}
									delete={moviesContext.removeMovie}
									markForDeletion={(event, id) => markForDeletion(event, id)}
									unmarkForDeletion={(event, id) =>
										unmarkForDeletion(event, id)
									}
								/>
							</li>
						);
					})}
				</ol>
			</>
		);
	}

	let moviesForDeletion = null;
	if (moviesToRemove.length) {
		moviesForDeletion = (
			<div className={classes.DeletionWarning}>
				<h5>
					You are about to delete{' '}
					{moviesToRemove.length} movie
					{moviesToRemove.length > 1 ? 's' : null} from your nominated list!
				</h5>
				<Button
					clicked={(event) => submitDeletion(event)}
					disabled={moviesToRemove.length ? false : true}
					btnType='Danger'>
					CONFIRM
				</Button>
			</div>
		);
	}
	return (
		<div className={classes.NominatedMoviesContainer}>
			<h5>Nominated movies:</h5>
			<div className={classes.NominatedMovies}>{displayMovies}</div>
			<div>{moviesForDeletion}</div>
		</div>
	);
};

export default NominatedMovies;
