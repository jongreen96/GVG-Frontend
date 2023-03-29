import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from './orderAPI';

const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orders: null,
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getOrders.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(getOrders.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.orders = action.payload;
			})
			.addCase(getOrders.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			});
	},
});

export const selectOrders = (state) => state.order.orders;

export default orderSlice.reducer;
