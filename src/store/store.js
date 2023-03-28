import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import orderReducer from './order/orderSlice';
import productReducer from './product/productSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		order: orderReducer,
		product: productReducer,
	},
});

export default store;
