import axios from 'axios';

const api = axios.create({
	baseURL: '/api/',
	// baseURL: 'http://localhost:3000',
	withCredentials: true,
});

export const sendContactForm = (data) => {
	try {
		return api.post('/contact', data);
	} catch (err) {
		throw err;
	}
};

export const sendOrderConfirmation = (user, total) => {
	try {
		return api.post('/order-confirmation', {
			name: `${user.first_name} ${user.last_name}`,
			email: user.email,
			total,
		});
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

export const downloadFile = async (file) => {
	// Download file from server
	try {
		const res = await api.get(`/download/${file}`, {
			responseType: 'blob',
		});
		// save file to local storage
		const url = window.URL.createObjectURL(new Blob([res.data]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', file);
		document.body.appendChild(link);
		link.click();
	} catch (err) {
		throw err;
	}
};

export const reviewProduct = async (review) => {
	try {
		return api.post('/reviews', review);
	} catch (err) {
		throw err;
	}
};

export default api;
