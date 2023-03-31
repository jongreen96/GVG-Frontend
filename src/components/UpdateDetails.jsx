import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../store/auth/authSlice';
import { updateDetails } from '../store/auth/authAPI';

export function UpdateDetails({ toggleUpdateDetails }) {
	const dispatch = useDispatch();

	const emptyForm = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		address: '',
		password: '',
		confirmPassword: '',
	};

	const [form, setForm] = useState(emptyForm);
	const user = useSelector(selectUser);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		if (form.password === form.confirmPassword) {
			dispatch(
				updateDetails({
					first_name: form.firstName,
					last_name: form.lastName,
					email: form.email,
					username: form.username,
					address: form.address,
					password: form.password,
				})
			);
			toggleUpdateDetails();
			setForm(emptyForm);
		}
	};

	return (
		<form className='flex-column'>
			<div>
				<h3 className='font-three'>Name:</h3>
				<div className='flex'>
					<input type='text' placeholder={user.first_name} className='font-four' name='firstName' onChange={(e) => handleChange(e)} value={form.firstName} />
					<input type='text' placeholder={user.last_name} className='font-four' name='lastName' onChange={(e) => handleChange(e)} value={form.lastName} />
				</div>
			</div>

			<div>
				<h3 className='font-three'>Email:</h3>
				<input type='email' placeholder={user.email} className='font-four' name='email' onChange={(e) => handleChange(e)} value={form.email} />
			</div>

			<div>
				<h3 className='font-three'>Username:</h3>
				<input type='text' placeholder={user.username} className='font-four' name='username' onChange={(e) => handleChange(e)} value={form.username} />
			</div>

			<div>
				<h3 className='font-three'>Address:</h3>
				<input type='text' placeholder={user.address} className='font-four' name='address' onChange={(e) => handleChange(e)} value={form.address} />
			</div>

			<div>
				<h3 className='font-three'>New Password:</h3>
				<input type='password' placeholder='Password123' className='font-four' name='password' onChange={(e) => handleChange(e)} value={form.password} />
			</div>

			<div>
				<h3 className='font-three'>Confirm Password:</h3>
				<input type='password' placeholder='Password123' className='font-four' name='confirmPassword' onChange={(e) => handleChange(e)} value={form.confirmPassword} />
			</div>

			<button type='submit' className='btn' onClick={() => handleSubmit()}>
				Save
			</button>
			<button className='btn-naked' type='button' onClick={() => toggleUpdateDetails()}>
				Cancel
			</button>
		</form>
	);
}
