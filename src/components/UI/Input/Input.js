import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;
	const inputClasses = [classes.InputElement];

	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<>
					<input
						className={inputClasses.join(' ')}
						{...props.elementConfig}
						value={props.value}
						onChange={props.changed}
					/>
					<span className={classes.focusBorder}>
						<i></i>
					</span>
				</>
			);
			break;
		default:
			inputElement = (
				<div className={classes.InputContainer}>
					<input
						className={inputClasses.join(' ')}
						// {...props.elementConfig}
						// value={props.value}
						placeholder={props.placeholder}
						onChange={props.changed}
					/>
					<span className={classes.focusBorder}>
						<i></i>
					</span>
				</div>
			);
	}

	// let validationMessage = props.label[0].toUpperCase()+props.label.slice(1)
	// if (props.invalid && props.touched) {
	// 	validationMessage = `Please enter a valid ${props.label}`

	// }

	return (
		<div>
			{/* <label className={classes.Label}>{validationMessage}</label> */}
			{inputElement}
		</div>
	);
};

export default input;
