import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';

export default (
	<Switch>
    <Route exact path='/' component={ Home }/>
		<Route path='/home' component={ Home }/>
    <Route exact path='/projects' component={ Projects }/>
    <Route exact path='/contact' component={ Contact }/>
	</Switch>
)
