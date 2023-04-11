import api from '../../utilities/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCart = createAsyncThunk('cart/getCart', async () => {
	try {
		const response = await api.get('/carts');
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const addItem = createAsyncThunk('cart/addItem', async (product_id) => {
	try {
		const response = await api.post('/carts', { product_id });
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const removeItem = createAsyncThunk(
	'cart/removeItem',
	async (product_id) => {
		try {
			const response = await api.delete(`/carts`, { data: { product_id } });
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);
