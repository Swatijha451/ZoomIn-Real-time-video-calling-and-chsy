import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const AuthContext = createContext({});
import httpStatus from 'http-status';
import server from '../environment.js';

const client = axios.create({
	baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
	const authContext = useContext(AuthContext);

	const [userData, setUserData] = useState(authContext);
	const navigate = useNavigate();

	const handleRegister = async (name, username, password) => {
		try {
			let request = await client.post('/register', {
				name: name,
				username: username,
				password: password,
			});

			if (request.status === httpStatus.CREATED) {
				return request.data.message;
			}
		} catch (e) {
			throw e;
		}
	};

	const handleLogin = async (username, password) => {
		try {
			let request = await client.post('/login', {
				username: username,
				password: password,
			});
			if (request.status === httpStatus.OK) {
				localStorage.setItem('token', request.data.token);
				navigate('/home');
			}
		} catch (e) {
			throw e;
		}
	};

	const getHistoryOfUser = async () => {
		try {
			let request = await client.get('/get_all_activity', {
				params: {
					token: localStorage.getItem('token'),
				},
			});
			return request.data;
		} catch (err) {
			throw err;
		}
	};

	const addToUserHistory = async (meetingCode) => {
		try {
			let request = await client.post('/add_to_activity', {
				token: localStorage.getItem('token'),
				meetingCode: meetingCode,
			});
			return request;
		} catch (e) {
			throw e;
		}
	};

	const data = {
		userData,
		setUserData,
		handleRegister,
		handleLogin,
		getHistoryOfUser,
		addToUserHistory,
	};
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
