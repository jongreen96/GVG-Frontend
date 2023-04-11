import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000',
	withCredentials: true,
});

export const sendContactForm = (data) => {
	try {
		return api.post('http://localhost:3000/contact', data);
	} catch (err) {
		throw err;
	}
};

export default api;