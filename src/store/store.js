import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import orderReducer from './order/orderSlice';
import productReducer from './product/productSlice';
import cartReducer from './cart/cartSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		order: orderReducer,
		product: productReducer,
		cart: cartReducer,
	},
});

export default store;
