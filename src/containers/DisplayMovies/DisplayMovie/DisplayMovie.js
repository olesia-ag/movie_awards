import React, { useContext, useEffect, useState } from 'react';
import { NominatedMoviesContext } from '../../../context/nominated-movies-context';
import Button from '../../../components/UI/Button/Button';
import classes from './DisplayMovie.module.css';

const DisplayMovie = (props) => {
	const { title, released, id } = props;
	const moviesContext = useContext(NominatedMoviesContext);
	const [nominated, setNominated] = useState(false);
	useEffect(() => {
		if (moviesContext.findMovieHandler(id)) {
			setNominated(true);
		}
		else{
			setNominated(false)
		}
	}, [...Object.values(moviesContext), id]);

	const nominateMovie = (event) => {
		event.preventDefault();
		const movie = {
			id: id,
			released: released,
			title: title,
		};
		moviesContext.addMovie(movie);
		setNominated(true)
	};

	return (
		<div className={classes.SingleMovie}>
			<p>
				{title} ({released})
			</p>
			<Button
				btnType='Success'
				clicked={(event) => nominateMovie(event)}
				disabled={nominated||moviesContext.reachedMax}
				key={id}>
				NOMINATE
			</Button>
		</div>
	);
};

export default DisplayMovie;
