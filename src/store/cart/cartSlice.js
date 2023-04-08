import { createSlice } from '@reduxjs/toolkit';
import { getCart } from './orderAPI';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: null,
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {
		clearCart: (state, action) => {
			state.cart = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCart.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(getCart.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.orders = action.payload;
			})
			.addCase(getCart.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			});
	},
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
