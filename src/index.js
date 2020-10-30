import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import NominatedMoviesProvider from './context/nominated-movies-context';
import './index.css';

ReactDOM.render(
	<NominatedMoviesProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</NominatedMoviesProvider>,
	document.getElementById('root')
);
