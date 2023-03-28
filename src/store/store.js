import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import orderReducer from './order/orderSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		order: orderReducer,
	},
});

export default store;
