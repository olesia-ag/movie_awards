import React, { useContext } from 'react';
import { NominatedMoviesContext } from '../../../context/nominated-movies-context';
import Button from '../../../components/UI/Button/Button';

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
			<Button clicked={event => nominateMovie(event)} btnType='Success'>
				Nominate
			</Button>
		</div>
	);
};

export default DisplayMovie;
