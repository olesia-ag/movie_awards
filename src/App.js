import React from 'react';
import './App.css';
import { Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Redirect to='/' />
			</Switch>
			<Layout />
		</div>
	);
}

export default App;
