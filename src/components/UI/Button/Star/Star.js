import React from 'react';
import classes from './Star.module.css';

const star = (props) => (

	<button onClick={props.clicked} disabled={props.disabled} className={[classes.Star, classes[props.btnType]].join(' ')}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='4em'
			height='4em'
			viewBox='0 0 100 100'
			>
			<title>Five Pointed Star</title>
			<path
				fill='none'
				stroke='#000'
				d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
			/>
		</svg>
	</button>
);

export default star;
