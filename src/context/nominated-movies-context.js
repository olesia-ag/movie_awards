import React, { useState } from 'react';

export const NominatedMoviesContext = React.createContext({
	movies: [],
	addMovie: () => {},
	removeMovie: () => {},
	findMovie: () => {},
	getMoviesFromStorage: () => {},
});

const NominatedMoviesProvider = (props) => {
	const [movies, setMovies] = useState([]);

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
		if(moviesArr.length!==0){
			setMovies(moviesArr)
		}
	};
	const removeMoviesHandler = (arrToRemove) => {
		const updatedMovies = movies.filter(el => !arrToRemove.includes(el.id));
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
				movies: movies,
			}}>
			{props.children}
		</NominatedMoviesContext.Provider>
	);
};

export default NominatedMoviesProvider;
