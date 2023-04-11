import api from '../../utilities/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk(
	'product/getAllProducts',
	async () => {
		try {
			const response = await api.get('/products');
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);

export const getReviewsByProductId = createAsyncThunk(
	'product/getReviewsByProductId',
	async (productId) => {
		try {
			const response = await api.get(`/reviews/${productId}`);
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);
