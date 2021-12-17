import React from 'react';
import Signup from '../auth/signup';
import Login from '../auth/login';
import {Switch,Redirect,Route} from 'react-router-dom';
import TemplateHome from '../TemplateHome';

const Off = ()=>{
	return <div  className="wrapper">
		<Switch>
	
			
			<Route exact path="/login">
               <Login />
			</Route>
			<Route exact path="/signup">
               <Signup />
			</Route>
			<Redirect from="*" to="/login" />
		</Switch>
		</div>
}
export default Off;