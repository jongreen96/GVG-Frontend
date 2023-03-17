export const authAPI = {
	isLoggedIn: () => {
		return fetch('localhost:3000/auth', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
	},
}
