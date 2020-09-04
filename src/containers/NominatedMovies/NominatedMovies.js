import React, { useState, useContext, useEffect } from 'react';
import { NominatedMoviesContext } from '../../context/nominated-movies-context';
import NominatedMovie from './NominatedMovie/NominatedMovie';
import Button from '../../components/UI/Button/Button'

const NominatedMovies = (props) => {
	//moviestoremove will only contain id of the movies that should be removed
	const [moviesToRemove, setMoviesToRemove] = useState([]);
	const moviesContext = useContext(NominatedMoviesContext);

	useEffect(() => {
		moviesContext.getMoviesFromStorage();
	}, []);

	const markForDeletion = (event, id) => {
		event.preventDefault();
		const updatedMoviesToRemove = [...moviesToRemove];
		updatedMoviesToRemove.push(id);
		setMoviesToRemove(updatedMoviesToRemove);
	};

	const unmarkForDeletion = (event, id) => {
		event.preventDefault()
		const updatedMoviesToRemove = moviesToRemove.filter((movieId) => {
			if (movieId !== id) {
				return movieId;
		}})
		setMoviesToRemove(updatedMoviesToRemove)
	}


	const submitDeletion = (event) => {
		event.preventDefault()
		moviesContext.removeMovies(moviesToRemove)
		setMoviesToRemove([])
	}

	let displayMovies;
	console.log(moviesContext);
	if (moviesContext.movies.length === 0) {
		displayMovies = <p>Nominate Some Movies First!</p>;
	} else {
		displayMovies = moviesContext.movies.map((movie) => {
			return (
				<NominatedMovie
					key={movie.id}
					movieId={movie.id}
					title={movie.title}
					released={movie.released}
					delete={moviesContext.removeMovie}
					markForDeletion={(event, id) => markForDeletion(event, id)}
					unmarkForDeletion={(event, id) => unmarkForDeletion(event, id)}
				/>
			)
		}
		)
	}

	let moviesForDeletion = null
	if(moviesToRemove.length){
		moviesForDeletion = (
			<>
			<p>You are about to delete {moviesToRemove.length===5?'all':moviesToRemove.length} movie{moviesToRemove.length>1?'s':null} from your favorites!</p>
			<Button clicked={(event)=>submitDeletion(event)} disabled={moviesToRemove.length?false:true} > SUBMIT </Button>
			</>
		)


	}
console.log('movies to remove:', moviesToRemove)
return <div>{displayMovies}{moviesForDeletion}</div>;
};

export default NominatedMovies;
