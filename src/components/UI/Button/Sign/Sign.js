import React from 'react';
import classes from './Sign.module.css';

const star = (props) => (
	<span className={[classes.Sign,classes[props.signType]].join(' ')} onClick={props.clicked}></span>
);

export default star;

// <button onClick={props.clicked} disabled={props.disabled} >
// 	 <svg
// 		xmlns='http://www.w3.org/2000/svg'
// 		width='2em'
// 		height='2em'
// 		viewBox='0 0 70 70'
// 		>
// 		 <title>Five Pointed Star</title>
// 		<path
// 			fill='none'
// 			stroke='#000'
// 			d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
// 		/>
// 		 <a href="../../../../../assets/star.svg"></a>
//  </svg>
// 	 <img src = {starButton} alt = 'Star Button' className={[classes.Star, classes[props.btnType]].join(' ')} />
// </button>
