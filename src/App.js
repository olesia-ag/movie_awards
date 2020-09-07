import React from 'react';
import './App.css';
import FindMovie from './containers/FindMovie/FindMovie';
import NominatedMovies from './containers/NominatedMovies/NominatedMovies';
import { Switch, Redirect, Route } from 'react-router-dom';
import Layout from './hoc/Layout'

function App() {

	return (
		<div className='App'>
			<Switch>
				<Route path='/nominatedmovies' exact component={NominatedMovies} />
				<Redirect to='/' />
			</Switch>
			<Layout />
		</div>
	);
}

export default App;
