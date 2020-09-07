import React, { useState, useContext } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import axiosInstance from '../../axios-movies';
import DisplayMovies from '../DisplayMovies/DisplayMovies';
import classes from './FindMovies.module.css';
import { NominatedMoviesContext } from '../../context/nominated-movies-context';

const FindMovie = (props) => {
	const movieData = {
		id: '',
		title: '',
		released: '',
		nominated: false,
	};
	const [movieToFind, setMovieToFind] = useState(movieData);
	const [foundMovies, setFoundMovies] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const { reachedMax } = useContext(NominatedMoviesContext);

	const submitHandler = (event) => {
		event.preventDefault();
		setLoading(true);
		setError(false);
	};

	const inputChangedHandler = (event) => {
		event.preventDefault();
		setError(null)
		const updatedMovie = { ...movieToFind };
		updatedMovie.title = event.target.value;
		setMovieToFind(updatedMovie);
	};

	const fetchMovie = () => {
		setLoading(true);
		axiosInstance
			.get(
				`?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type="movie"&s="${movieToFind.title}"&`,
				{ timeout: 6000 }
			)
			.then((res) => {
				if (res.data.Response === 'False') throw Error(res.data.Error);
				setFoundMovies(res.data.Search);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	};
	let showWarning = null;
	if (reachedMax) {
		showWarning =<span className={classes.ReachedMaxWarning}><h5>You've reached the maximum of 5 nominated movies!</h5></span> ;
	}
	return (
		<div className={classes.FindMovies}>
			<form onSubmit={submitHandler} className={classes.FormContainer}>
				<Input
					changed={(event) => inputChangedHandler(event)}
					label='title'
					placeholder='movie title, e.g. Harry Potter'
				/>
				<Button
					btnType='Success'
					clicked={() => fetchMovie()}
					disabled={movieToFind.title.length === 0}>
					SUBMIT
				</Button>
			</form>
			{showWarning}
			<DisplayMovies
				movies={foundMovies}
				loading={loading}
				error={error}
				movieToFind={movieToFind}
			/>
		</div>
	);
};

export default FindMovie;
