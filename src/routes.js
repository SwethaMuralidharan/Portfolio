import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';

export default (
	<Switch>
    <Route exact path='/' component={ Home }/>
		<Route path='/Portfolio/about' component={ Home }/>
    <Route exact path='/Portfolio/projects' component={ Projects }/>
    <Route exact path='/Portfolio/contact' component={ Contact }/>
	</Switch>
)
