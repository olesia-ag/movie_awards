import React, { useState, useEffect } from 'react';

export const NominatedMoviesContext = React.createContext({
	movies: [],
	reachedMax: false,
	addMovie: () => {},
	removeMovie: () => {},
	findMovie: () => {},
	getMoviesFromStorage: () => {},
	reachedMax: () => {},
	findMovieHandler: () => {},
});

const NominatedMoviesProvider = (props) => {
	const [movies, setMovies] = useState([]);
	const [reachedMax, setReachedMax] = useState(null);
	console.log('movies in context', movies);
	useEffect(() => {
		if (movies.length === 5) {
			setReachedMax(true);
		} else {
			setReachedMax(false);
		}
	}, [movies.length]);
	useEffect(() => getMoviesFromStorage(), []);
	const addMovieHandler = (movie) => {
		console.log('went to addMovieHandler in context', movie);
		if (movies.length > 4) {
			return 'Sorry. Maximum of five movies allowed. Delete something first';
		} else {
			let updatedMovies = [...movies];
			updatedMovies.push(movie);
			setMovies(updatedMovies);
			localStorage.setItem('Movies', JSON.stringify(updatedMovies));
		}
	};

	const getMoviesFromStorage = () => {
		const moviesArr = JSON.parse(localStorage.getItem('Movies'));
		if (moviesArr.length !== 0) {
			setMovies(moviesArr);
		}
	};
	const removeMoviesHandler = (arrToRemove) => {
		const updatedMovies = movies.filter((el) => !arrToRemove.includes(el.id));
		localStorage.setItem('Movies', JSON.stringify(updatedMovies));
		setMovies(updatedMovies);
	};
	//will check if the movie with id already exists in the array
	const findMovieHandler = (id) => {
		return movies.some((movie) => movie.id === id);
	};
	return (
		<NominatedMoviesContext.Provider
			value={{
				addMovie: addMovieHandler,
				removeMovies: removeMoviesHandler,
				findMovie: findMovieHandler,
				getMoviesFromStorage: getMoviesFromStorage,
				findMovieHandler: findMovieHandler,
				reachedMax: reachedMax,
				movies: movies,
			}}>
			{props.children}
		</NominatedMoviesContext.Provider>
	);
};

export default NominatedMoviesProvider;
