import React from 'react';
import Signup from './auth/Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './auth/Profile';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import ForgotPassword from './auth/ForgotPassword';
import UpdateProfile from './auth/UpdateProfile';
import Dashboard from './drive/Dashboard';

function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					{/* Mock Drive routes */}
					<PrivateRoute exact path='/' component={Dashboard} />
					<PrivateRoute exact path='/folder/:folderId' component={Dashboard} />
					{/* Profile routes */}
					<PrivateRoute path='/user' component={Profile} />
					<PrivateRoute path='/update-profile' component={UpdateProfile} />

					{/* Auth routes */}
					<Route path='/signup' component={Signup} />
					<Route path='/login' component={Login} />
					<Route path='/forgot-password' component={ForgotPassword} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
