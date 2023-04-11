import { createSlice } from '@reduxjs/toolkit';
import { getCart, addItem, removeItem } from './cartAPI';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {
		clearCart: (state) => {
			state.cart = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCart.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(getCart.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.cart = action.payload.items;
			})
			.addCase(getCart.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			})
			.addCase(removeItem.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(removeItem.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.cart = state.cart.filter(
					(item) => item.product_id !== action.payload.product_id
				);
			})
			.addCase(removeItem.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			})
			.addCase(addItem.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(addItem.fulfilled, (state, action) => {
				state.status = 'succeeded';
				if (
					state.cart?.find(
						(item) => item.product_id === action.payload.product_id
					)
				) {
					state.cart = state.cart.map((item) => {
						if (item.product_id === action.payload.product_id) {
							item.quantity = action.payload.quantity;
						}
						return item;
					});
				} else {
					state.cart = [...state.cart, action.payload];
				}
			})
			.addCase(addItem.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			});
	},
});

export const { clearCart } = cartSlice.actions;

export const selectCart = (state) => state?.cart.cart;
export const selectCartAmount = (state) => state.cart.cart?.length;

export default cartSlice.reducer;
