import axios from 'axios';

const api = axios.create({
	// baseURL: '/api/',
	baseURL: 'http://localhost:3000',
	withCredentials: true,
});

export const sendContactForm = (data) => {
	try {
		return api.post('/contact', data);
	} catch (err) {
		throw err;
	}
};

export const paymentIntent = async (total) => {
	try {
		const response = await api.post('/create-payment-intent', { total });
		return response.data.clientSecret;
	} catch (err) {
		throw err;
	}
};

export default api;
