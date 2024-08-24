import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Authentication from './pages/Authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import VideoMeet from './pages/VideoMeet.jsx';
import History from './pages/History.jsx';
import HomeComponent from './pages/Home.jsx';

const App = () => {
	return (
		<>
			<Router>
				<AuthProvider>
					<Routes>
						<Route
							path="/"
							element={<Landing />}
						/>
						<Route
							path="/auth"
							element={<Authentication />}
						/>
						<Route
							path="/home"
							s
							element={<HomeComponent />}
						/>
						<Route
							path="/:url"
							element={<VideoMeet />}
						/>
						<Route
							path="/history"
							element={<History />}
						/>
					</Routes>
				</AuthProvider>
			</Router>
		</>
	);
};

export default App;
