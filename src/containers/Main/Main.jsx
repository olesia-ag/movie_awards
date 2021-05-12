import React, { useState } from 'react';
import NominatedMovies from '../NominatedMovies/NominatedMovies';
import FindMovies from '../FindMovies/FindMovies';
import classes from './Main.module.css';
import DisplayMovies from '../../components/DisplayMovies/DisplayMovies';
import axios from 'axios';

const Main = (props) => {
	const [movieToFind, setMovieToFind] = useState('');
	const [foundMovies, setFoundMovies] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitHandler = (event) => {
		event.preventDefault();
		setLoading(true);
		setError(false);
	};

	const inputChangedHandler = (event) => {
		event.preventDefault();
		setError(null);
		setMovieToFind(event.target.value);
	};

	const fetchMovies = () => {
		const query = `https://www.omdbapi.com/?apikey=5916f334&type="movie"&s="${movieToFind}"&`;
		axios
			.get(query, {
				timeout: 6000,
			})
			.then((res) => {
				setLoading(false);
				if (res.data.Response === 'False') throw Error(res.data.Error);
				else {
					setFoundMovies(res.data.Search);
				}
			})
			.catch((error) => {
				setLoading(false);
				setError(error);
			});
	};

	let showMovies = null;

	if (loading) showMovies = <p>searching...</p>;
	else if (error) showMovies = <p>{error.message}</p>;
	else if (foundMovies.length) {
		showMovies = (
			<div className={classes.DisplayMovies}>
				<DisplayMovies movies={foundMovies} movieToFind={movieToFind} />
			</div>
		);
	}

	return (
		<div className={classes.LayoutContainer}>
			<div className={classes.FindContainer}>
				<FindMovies
					submitHandler={(e) => submitHandler(e)}
					inputChangedHandler={(e) => inputChangedHandler(e)}
					loading
					fetchMovies={() => fetchMovies()}
					movieToFind
				/>
			</div>
			<div className={classes.MoviesContainer}>
				<div className={classes.NominatedMovies}>
					<NominatedMovies />
				</div>
				{showMovies}
			</div>
		</div>
	);
};

export default Main;
