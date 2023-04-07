import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
	try {
		const response = await axios.get('http://localhost:3000/products', {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const getReviewsByProductId = createAsyncThunk('product/getReviewsByProductId', async (productId) => {
		try {
			const response = await axios.get(
				`http://localhost:3000/reviews/${productId}`,
				{
					withCredentials: true,
				}
			);
			return response.data;
		} catch (err) {
			throw err;
		}
	}
)