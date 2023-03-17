import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
	try {
		const response = await authAPI.isLoggedIn()
		return response.ok
	} catch (err) {
		throw err
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthenticated: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(checkLoginStatus.fulfilled, (state, action) => {
			state.isAuthenticated = action.payload
			console.log('authSlice.js: state.isAuthenticated = action.payload', state.isAuthenticated)
		})
	},
})

export default authSlice.reducer
