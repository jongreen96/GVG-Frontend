import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getReviewsByProductId } from './productAPI';

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
			})
			.addCase(getReviewsByProductId.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(getReviewsByProductId.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.products = state.products?.map((product) => {
					if (product.id === action.payload[0]?.product_id) {
						product.reviews = action.payload;
					}
					return product;
				});
			})
			.addCase(getReviewsByProductId.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.message;
			});
	},
});

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
