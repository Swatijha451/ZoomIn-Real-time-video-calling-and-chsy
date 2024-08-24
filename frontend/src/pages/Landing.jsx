import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
	const navigate = useNavigate();
	return (
		<div className="landingContainer">
			<nav>
				<div className="navHeader">
					<h2>ZoomIn</h2>
				</div>
				<div className="navList">
					<p
						onClick={() => {
							navigate('/djskh');
						}}>
						Join as Guest
					</p>
					<p
						onClick={() => {
							navigate('/auth');
						}}>
						Regiter
					</p>
					<div
						role="button"
						onClick={() => {
							navigate('/auth');
						}}>
						<p>Login</p>
					</div>
				</div>
			</nav>

			<div className="landingMainContainer">
				<div>
					<h1>
						<span style={{ color: '#ff9839' }}>Connect</span> with your loved
						ones
					</h1>
					<p>Cover a distance with ZooomIn video call</p>
					<div role="button">
						<Link to={'/auth'}>Get Started</Link>
					</div>
				</div>
				<div>
					<img
						src="/mobile.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Landing;
