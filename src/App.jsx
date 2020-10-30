import React from 'react';
import './App.css';
import { Switch, Redirect} from 'react-router-dom';
import Main from './containers/Main/Main';

function App() {
	return (
		<div>
			<Switch>
				<Redirect to='/' />
			</Switch>
			<Main />
		</div>
	);
}

export default App;
