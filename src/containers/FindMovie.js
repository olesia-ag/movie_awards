import React, { useState } from 'react';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button'
import axiosInstance from '../axios-movies'
import DisplayMovie from './DisplayMovie'
import classes from './FindMovie.module.css'


const FindMovie = props => {
	const movieData = {
    id: '',
		title: '',
		released: '',
		nominated: false
	};
  const [movieToFind, setMovieToFind] = useState(movieData);
  const [foundMovie, setFoundMovie] = useState({})
  const [sending, setSending] = useState(false);

  const submitHandler = (event) => {
		event.preventDefault();
		setSending(true);
	};

	const inputChangedHandler = event => {
    event.preventDefault();
    const updatedMovie = {...movieToFind}
    updatedMovie.title = event.target.value
    setMovieToFind(updatedMovie)
  };

  const fetchMovie = () => {
    axiosInstance.get(`?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type="movie"&t="${movieToFind.title}"&`)
    .then(res=>foundMovieSuccess(res.data.imdbID, res.data.Title, res.data.Released))
    .catch(error=> console.log(error))
  }

  const foundMovieSuccess = (id, title, released) => {
    console.log(id, title, released)
    const foundMovie = {
      id: id,
      title: title,
      released: released
    }
    setFoundMovie(foundMovie)
  }
	return (
		<div className={classes.Container}>
      <form onSubmit={submitHandler}>
        <p>Please enter the title of the movie you would like to find:</p>
			  <Input changed = {event => inputChangedHandler(event)}></Input>
			  <p>Searching for {movieToFind.title}</p>
        <Button btnType='Success' clicked={()=>fetchMovie()}>Submit</Button>
      </form>
      <DisplayMovie title={foundMovie.title} id={foundMovie.id} released ={foundMovie.released} />

		</div>
	);
};

export default FindMovie;
