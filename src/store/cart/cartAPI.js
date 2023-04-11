import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCart = createAsyncThunk('cart/getCart', async () => {
	try {
		const response = await axios.get('http://localhost:3000/carts', {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const addItem = createAsyncThunk('cart/addItem', async (product_id) => {
	try {
		const response = await axios.post(
			'http://localhost:3000/carts',
			{ product_id },
			{ withCredentials: true }
		);
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const removeItem = createAsyncThunk(
	'cart/removeItem',
	async (product_id) => {
		try {
			const response = await axios.delete(`http://localhost:3000/carts`, {
				data: { product_id },
				withCredentials: true,
			});

			return response.data;
		} catch (err) {
			throw err;
		}
	}
);
