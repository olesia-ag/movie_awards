import React, { useState } from 'react';
import Star from '../../../components/UI/Button/Star/Star';
import classes from './NominatedMovie.module.css';

const NominatedMovie = ({
	movieId,
	title,
	released,
	markForDeletion,
	unmarkForDeletion,
}) => {
	const [toDelete, setToDelete] = useState(false);
	let nominatedMovieClasses=[classes.NominatedMovie]
	if(toDelete){
		nominatedMovieClasses.push(classes.ToDelete)
	}

	const chooseToDelete = (event) => {
		setToDelete(true);
		markForDeletion(event, movieId);
	};

	const unchooseToDelete = (event) => {
		setToDelete(false);
		unmarkForDeletion(event, movieId);
	};

	return (
		<div className={nominatedMovieClasses.join(' ')}>
			{title} ({released})
				<Star
					btnType={!toDelete ? 'Added' : 'Add'}
					clicked={toDelete ? unchooseToDelete : chooseToDelete}
				/>
		</div>
	);
};

export default NominatedMovie;
