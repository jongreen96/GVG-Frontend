import api from '../../utilities/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkLoginStatus = createAsyncThunk(
	'auth/checkLoginStatus',
	async () => {
		try {
			const response = await api.get('/auth');
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);

export const login = createAsyncThunk('auth/login', async (credentials) => {
	try {
		const response = await api.post('/login', credentials);
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		await api.post('/logout');
	} catch (err) {
		throw err;
	}
});

export const register = createAsyncThunk(
	'auth/register',
	async (credentials) => {
		try {
			const response = await api.post('/register', credentials);
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);

export const updateDetails = createAsyncThunk(
	'auth/updateDetails',
	async (details) => {
		try {
			const response = await api.put('/users', details);
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);
