import React, { useContext } from 'react';
import { NominatedMoviesContext } from '../../../context/nominated-movies-context';
import Button from '../../../components/UI/Button/Button';
import Star from '../../../components/UI/Button/Star/Star'

const DisplayMovie = props => {
	const { title, released, id, nominated } = props;
	const moviesContext = useContext(NominatedMoviesContext);

	const nominateMovie = event => {
    console.log('went to nominate movie')
		event.preventDefault();
		const movie = {
			id: id,
			released: released,
			title: title
		};
		moviesContext.addMovie(movie);
	};
	return (
		<div>
			<p>{title}</p>
			<p>{released}</p>
			<Star clicked={event => nominateMovie(event)} btnType='Add' />
		</div>
	);
};

export default DisplayMovie;
