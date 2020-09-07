import React from 'react';
import NominatedMovies from '../containers/NominatedMovies/NominatedMovies';
import FindMovies from '../containers/FindMovies/FindMovies';
import DisplayMovies from '../containers/DisplayMovies/DisplayMovies';
import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<div className={classes.MainContainer}>
				<NominatedMovies />
				<FindMovies />
		</div>
	);
};

export default Layout;
