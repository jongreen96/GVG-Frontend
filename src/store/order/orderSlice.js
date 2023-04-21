import { createSlice } from '@reduxjs/toolkit';
import { getOrders, createOrder } from './orderAPI';

const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orders: [],
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {
		clearOrders: (state, action) => {
			state.orders = null;
		},
	},
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
			})
			.addCase(createOrder.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.orders = [...state.orders, action.payload];
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			});
	},
});

export const selectOrders = (state) => state.order.orders;

export const { clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
