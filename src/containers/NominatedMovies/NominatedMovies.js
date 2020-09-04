import React, { useState, useContext, useEffect } from 'react';
import { NominatedMoviesContext } from '../../context/nominated-movies-context';
import NominatedMovie from './NominatedMovie/NominatedMovie';

const NominatedMovies = props => {
  //moviestoremove will only contain id of the movies that should be removed
  const [moviesToRemove, setMoviesToRemove] = useState([])
  const moviesContext = useContext(NominatedMoviesContext);

  const markForDeletion = (event) => {
    event.preventDefault()

  }
	useEffect(()=>{
	moviesContext.getMoviesFromStorage()
	}, [])

	let displayMovies;
	console.log(moviesContext)
	if (moviesContext.movies.length === 0) {
		displayMovies = <p>Nominate Some Movies First!</p>;
	} else {
		displayMovies = moviesContext.movies.map(movie => {
			return (
				<NominatedMovie
					key={movie.id}
					title={movie.title}
          released={movie.released}
          delete = {moviesContext.removeMovie}
          toDelete = {false}
				/>
			);
		});
	}
	return <div>{displayMovies}</div>;
};

export default NominatedMovies;
