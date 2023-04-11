import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../store/auth/authAPI';

export function Login({ toggleMenu }) {
	const dispatch = useDispatch();

	const emptyForm = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		confirmPassword: '',
	};

	const [registerMenu, setRegisterMenu] = useState(false);
	const [form, setForm] = useState(emptyForm);

	const toggleRegister = () => {
		setForm(emptyForm);
		setRegisterMenu(!registerMenu);
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submitLogin = (e) => {
		if (e) {
			e.preventDefault();
		}
		dispatch(
			login({
				email: form.email,
				password: form.password,
			})
		);
		toggleMenu('login');
		setForm(emptyForm);
	};

	const submitRegister = (e) => {
		e.preventDefault();
		if (form.password === form.confirmPassword) {
			dispatch(
				register({
					email: form.email,
					password: form.password,
					firstName: form.firstName,
					lastName: form.lastName,
				})
			).then(() => submitLogin());
			toggleMenu('login');
			setForm(emptyForm);
		}
	};

	if (registerMenu) {
		return (
			<>
				<div className='login flex-column'>
					<p className='font-three'>REGISTER</p>

					<form className='flex-column'>
						<input
							type='text'
							placeholder='FIRST NAME'
							name='firstName'
							onChange={(e) => handleChange(e)}
							value={form.firstName}
						/>
						<input
							type='text'
							placeholder='LAST NAME'
							name='lastName'
							onChange={(e) => handleChange(e)}
							value={form.lastName}
						/>
						<input
							type='text'
							placeholder='EMAIL'
							name='email'
							onChange={(e) => handleChange(e)}
							value={form.email}
						/>
						<input
							type='password'
							placeholder='PASSWORD'
							name='password'
							onChange={(e) => handleChange(e)}
							value={form.password}
						/>
						<input
							type='password'
							placeholder='CONFIRM PASSWORD'
							name='confirmPassword'
							onChange={(e) => handleChange(e)}
							value={form.confirmPassword}
						/>
						<button
							type='submit'
							className='btn'
							onClick={(e) => submitRegister(e)}
						>
							SUBMIT
						</button>
					</form>

					<div className='register flex font-five'>
						<p>Already have an account?</p>
						<p id='register' onClick={() => toggleRegister()}>
							Login Here
						</p>
					</div>
				</div>

				<div
					className='overlay'
					onClick={() => toggleMenu('login')}
				></div>
			</>
		);
	} else {
		return (
			<>
				<div className='login flex-column'>
					<p className='font-three'>LOGIN</p>

					<form className='flex-column'>
						<input
							type='text'
							placeholder='EMAIL'
							name='email'
							onChange={(e) => handleChange(e)}
							value={form.email}
						/>
						<input
							type='password'
							placeholder='PASSWORD'
							name='password'
							onChange={(e) => handleChange(e)}
							value={form.password}
						/>
						<button
							type='submit'
							className='btn'
							onClick={(e) => submitLogin(e)}
						>
							SUBMIT
						</button>
					</form>

					<div className='register flex font-five'>
						<p>Don't have an account?</p>
						<p id='register' onClick={() => toggleRegister()}>
							Register Here
						</p>
					</div>
				</div>

				<div
					className='overlay'
					onClick={() => toggleMenu('login')}
				></div>
			</>
		);
	}
}
