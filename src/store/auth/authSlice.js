import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
	try {
		const response = await axios.get('http://localhost:3000/auth', {
			withCredentials: true,
		})
		// console.log(response.data)
		return response.data
	} catch (err) {
		throw err
	}
})

export const login = createAsyncThunk('auth/login', async (credentials) => {
	try {
		const response = await axios.post('http://localhost:3000/login', credentials)
		return response.data.user
	} catch (err) {
		throw err
	}
})

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		const response = await axios.post('http://localhost:3000/logout')
	} catch (err) {
		throw err
	}
})

export const register = createAsyncThunk('auth/register', async (credentials) => {
	try {
		const response = await axios.post('http://localhost:3000/register', credentials)
		return response.data
	} catch (err) {
		throw err
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(checkLoginStatus.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(checkLoginStatus.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.user = action.payload
			})
			.addCase(checkLoginStatus.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.message
			})
			.addCase(login.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.user = action.payload
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.message
			})
	},
})

export const selectUser = (state) => state.auth.user

export default authSlice.reducer
