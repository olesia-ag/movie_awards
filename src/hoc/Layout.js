import React from 'react';
import NominatedMovies from '../containers/NominatedMovies/NominatedMovies';
import FindMovie from '../containers/FindMovie/FindMovie';
import { NominatedMoviesContext } from '../context/nominated-movies-context';


const Layout = (props) => {


	return (
		<>
      <FindMovie />
      <NominatedMovies />
		</>
	);
};

export default Layout;
