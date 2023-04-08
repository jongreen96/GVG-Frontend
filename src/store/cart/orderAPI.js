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
