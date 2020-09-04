import React, { useState } from 'react';
import './App.css';
import FindMovie from './containers/FindMovie/FindMovie';
import NominatedMovies from './containers/NominatedMovies/NominatedMovies';
import { Switch, Redirect, Route } from 'react-router-dom';
import SideDrawer from './components/Navigation/Toolbar/SideDrawer/SideDrawer';

function App() {
	const [showSideDrawer, switchShowSideDrawer] = useState(false);

	const sideDrawerClosedHandler = () => {
		switchShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		switchShowSideDrawer(!showSideDrawer);
	};

	return (
		<div className='App'>
			<SideDrawer
				closed={sideDrawerClosedHandler}
				drawerToggleClicked={sideDrawerToggleHandler}
			/>
			<Switch>
				<Route path='/findmovie' exact component={FindMovie} />
				<Route path='/nominatedmovies' exact component={NominatedMovies} />
				<Redirect to='/findmovie' />
			</Switch>
			<NominatedMovies />
		</div>
	);
}

export default App;
