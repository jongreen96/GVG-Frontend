import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOrders = createAsyncThunk('order/getOrders', async () => {
	try {
		const response = await axios.get('http://localhost:3000/orders', {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const getOrderDetails = createAsyncThunk('order/getOrderDetails', async (id) => {
	try {
		const response = await axios.get(`http://localhost:3000/orders/${id}`, {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw err;
	}
});
