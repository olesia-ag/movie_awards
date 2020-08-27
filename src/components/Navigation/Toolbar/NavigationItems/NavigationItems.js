import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/nominatedmovies' exact>
			Movies you nominated
		</NavigationItem>

		<NavigationItem link='/findmovie'>Find a movie
    </NavigationItem>
	</ul>
);

export default navigationItems;
