import React, { useState } from 'react';

export const NominatedMoviesContext = React.createContext({
	movies: [],
	addMovie: () => {},
  removeMovie: () => {},
  findMovie: ()=>{}
});

const NominatedMoviesProvider = props => {
	const [movies, setMovies] = useState([]);

	const addMovieHandler = movie => {
    console.log('went to addMovieHandler in context')
		if (movies.length > 4) {
			return 'Sorry. Maximum of five movies allowed. Delete something first';
		} else {
			const updatedMovies = [...movies];
			updatedMovies.push(movie);
			setMovies(updatedMovies);
		}
	};

	const removeMovieHandler = id => {
		const updatedMovies = movies.map(movie => {
			if (movie.id !== id) {
				return movie;
			}
		});
		setMovies(updatedMovies);
	};
//will check if the movie with id already exists in the array
  const findMovieHandler = (id) => {
    return movies.some(movie => movie.id === id)
  }
	return (
		<NominatedMoviesContext.Provider
			value={{
				addMovie: addMovieHandler,
        removeMovie: removeMovieHandler,
        findMovie: findMovieHandler,
				movies: movies
			}}>
			{props.children}
		</NominatedMoviesContext.Provider>
	);
};


export default NominatedMoviesProvider
