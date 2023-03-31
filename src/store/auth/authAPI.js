import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
	try {
		const response = await axios.get('http://localhost:3000/auth', {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const login = createAsyncThunk('auth/login', async (credentials) => {
	try {
		const response = await axios.post('http://localhost:3000/login', credentials, {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
	} catch (err) {
		throw err;
	}
});

export const register = createAsyncThunk('auth/register', async (credentials) => {
	try {
		const response = await axios.post('http://localhost:3000/register', credentials, {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const updateDetails = createAsyncThunk('auth/updateDetails', async (details) => {
	try {
		const response = await axios.put('http://localhost:3000/users', details, {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});
