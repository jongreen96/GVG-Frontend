import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
	try {
		const response = await axios.get('http://localhost:3000/auth')
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
				state.user = action.payload.user
			})
			.addCase(checkLoginStatus.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.message
			})
	},
})

export default authSlice.reducer
