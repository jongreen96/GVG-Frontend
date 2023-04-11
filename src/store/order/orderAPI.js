import api from '../../utilities/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOrders = createAsyncThunk('order/getOrders', async () => {
	try {
		const response = await api.get('/orders');
		return response.data;
	} catch (err) {
		throw err;
	}
});
