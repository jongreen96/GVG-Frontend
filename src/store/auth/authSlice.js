import { createSlice } from '@reduxjs/toolkit';
import { checkLoginStatus, login, logout, register } from './authAPI';

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
				state.status = 'loading';
			})
			.addCase(checkLoginStatus.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload.user;
			})
			.addCase(checkLoginStatus.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			})
			.addCase(login.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			})
			.addCase(register.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(register.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			})
			.addCase(logout.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = null;
			})
			.addCase(logout.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			});
	},
});

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
