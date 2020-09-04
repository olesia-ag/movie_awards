import React, { useEffect, useState } from 'react';
import Star from '../../../components/UI/Button/Star/Star';
import classes from './NominatedMovie.module.css';

const NominatedMovie = ({ movieId, title, released, markForDeletion, unmarkForDeletion }) => {
	const [toDelete, setToDelete] = useState(false);

	const chooseToDelete = (event) => {
    setToDelete(true);
    console.log(event.target)
		markForDeletion(event, movieId);
	};

	const unchooseToDelete = (event) => {
    setToDelete(false);
    unmarkForDeletion(event, movieId)
	};

	return (
		<div className={classes.NominatedMovie}>
			<ul>
				<li>title: {title}</li>
				<li>released: {released}</li>
			</ul>
			<Star
				btnType={!toDelete ? 'Added' : 'Add'}
				clicked={
					toDelete
						? unchooseToDelete
						: chooseToDelete
				}
			/>
		</div>
	);
};

export default NominatedMovie;
