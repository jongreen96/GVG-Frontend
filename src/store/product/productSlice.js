import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './productAPI';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		products: null,
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.products = action.payload;
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			});
	},
});

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
