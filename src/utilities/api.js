import axios from 'axios';

export const sendContactForm = (data) => {
	try {
		return axios.post('http://localhost:3000/contact', data, {
			withCredentials: true,
		});
	} catch (err) {
		throw err;
	}
};
