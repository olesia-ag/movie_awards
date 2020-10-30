import React, { useState } from 'react';
export const NominatedMoviesContext = React.createContext({
	movies: [],
	addMovie: () => {},
	removeMovie: () => {},
	checkIfNominated: () => {},
	getMoviesFromStorage: () => {},
	findMovieHandler: () => {},
	checkLimit: () => {},
});

const NominatedMoviesProvider = (props) => {
	const [movies, setMovies] = useState([]);

	const checkLimit = () => {
		if (movies.length === 5) {
			return true;
		} else {
			return false;
		}
	};
	//nominate movie
	const addMovieHandler = (movie) => {
		if (movies.length > 4) {
			return 'Error. Should not get here';
		} else {
			let updatedMovies = [...movies];
			updatedMovies.push(movie);
			setMovies(updatedMovies);
			localStorage.setItem('Movies', JSON.stringify(updatedMovies));
		}
	};
	//get nominated movies from localStorage
	const getMoviesFromStorage = () => {
		const moviesArr = JSON.parse(localStorage.getItem('Movies'));
		if (moviesArr) {
			setMovies(moviesArr);
		}
	};

	const removeMovieHandler = (movieId) => {
		const updatedMovies = movies.filter((movie) => movie.imdbID !== movieId);
		localStorage.setItem('Movies', JSON.stringify(updatedMovies));
		setMovies(updatedMovies);
	};

	//will check if the movie already nominated
	const findMovieHandler = (id) => {
		return movies.some((movie) => movie.imdbID === id);
	};
	return (
		<NominatedMoviesContext.Provider
			value={{
				addMovie: addMovieHandler,
				removeMovie: removeMovieHandler,
				checkIfNominated: findMovieHandler,
				getMoviesFromStorage: getMoviesFromStorage,
				checkLimit,
				movies,
			}}>
			{props.children}
		</NominatedMoviesContext.Provider>
	);
};

export default NominatedMoviesProvider;
