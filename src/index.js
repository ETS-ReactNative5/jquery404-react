import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, HashRouter} from 'react-router-dom';

import App from './App';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import FourZFour from './components/FourZFour';


ReactDOM.render(
	<HashRouter>
		<App>
			<Switch>
				<Route exact path="/" component={About} />
				<Route path="/project" component={Project} />
				<Route path="/contact" component={Contact} />
				<Route path="*" component={FourZFour} />
			</Switch>
		</App>
	</HashRouter>
	, root
);
