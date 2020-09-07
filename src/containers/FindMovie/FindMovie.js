import React, { useState, useContext, useEffect } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import axiosInstance from '../../axios-movies';
import DisplayMovie from './DisplayMovie/DisplayMovie';
import classes from './FindMovie.module.css';
import { NominatedMoviesContext } from '../../context/nominated-movies-context';

const FindMovie = (props) => {
	const movieData = {
		id: '',
		title: '',
		released: '',
		nominated: false,
	};
	const [movieToFind, setMovieToFind] = useState(movieData);
	const [foundMovie, setFoundMovie] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const moviesContext = useContext(NominatedMoviesContext);

	const submitHandler = (event) => {
		event.preventDefault();
		setLoading(true);
		setError(false);
	};

	const inputChangedHandler = (event) => {
		event.preventDefault();
		const updatedMovie = { ...movieToFind };
		updatedMovie.title = event.target.value;
		setMovieToFind(updatedMovie);
	};

	useEffect(() => {
		if (moviesContext.findMovieHandler(foundMovie.id)) {
			const updatedMovie = { ...foundMovie };
			updatedMovie.nominated = true;
			setFoundMovie(updatedMovie);
		}
	}, [foundMovie.id]);

	const fetchMovie = () => {
		setLoading(true);
		axiosInstance
			.get(
				`?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type="movie"&t="${movieToFind.title}"&`,
				{ timeout: 6000 }
			)
			.then((res) => {
				if (res.data.Response === 'False') throw Error(res.data.Error);
				setFoundMovie({
					id: res.data.imdbID,
					title: res.data.Title,
					released: res.data.Released,
				});
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	};

	let displayMovie = null;
	console.log(error);
	if (loading) {
		displayMovie = <p>Searching for {movieToFind.title}</p>;
	} else if (error) {
		displayMovie = error.message;
	} else if(foundMovie.id) {
		displayMovie = (
			<DisplayMovie
				title={foundMovie.title}
				id={foundMovie.id}
				released={foundMovie.released}
				nominated={foundMovie.nominated}
			/>
		);
	}
console.log(foundMovie)
	return (
		<div className={classes.Container}>
			<form onSubmit={submitHandler}>
				<p>Please enter the title of the movie you would like to find:</p>
				<div className={classes.InputContainer}>
					<Input changed={(event) => inputChangedHandler(event)}></Input>
				</div>
				<Button btnType='Success' clicked={() => fetchMovie()}>
					SUBMIT
				</Button>
			</form>
			{displayMovie}
		</div>
	);
};

export default FindMovie;
