import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/auth/authSlice'

export function Login({ toggleMenu }) {
	const dispatch = useDispatch()

	const [register, setRegister] = useState(false)
	const toggleRegister = () => setRegister(!register)

	const [form, setForm] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		confirmPassword: '',
	})

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const submitLogin = () => {
		dispatch(
			login({
				email: form.email,
				password: form.password,
			})
		)
		toggleMenu('login')
	}

	if (register) {
		return (
			<>
				<div className='login flex-column'>
					<p className='font-three'>REGISTER</p>
					<input type='text' placeholder='FIRST NAME' name='firstName' onChange={handleChange} />
					<input type='text' placeholder='LAST NAME' name='lastName' onChange={handleChange} />
					<input type='text' placeholder='EMAIL' name='email' onChange={handleChange} />
					<input type='password' placeholder='PASSWORD' name='password' onChange={handleChange} />
					<input type='password' placeholder='CONFIRM PASSWORD' name='confirmPassword' onChange={handleChange} />
					<button className='btn'>SUBMIT</button>
					<div className='register flex font-five'>
						<p>Already have an account?</p>
						<p id='register' onClick={() => toggleRegister()}>
							Login Here
						</p>
					</div>
				</div>
				<div className='overlay' onClick={() => toggleMenu('login')}></div>
			</>
		)
	} else {
		return (
			<>
				<div className='login flex-column'>
					<p className='font-three'>LOGIN</p>
					<input type='text' placeholder='EMAIL' name='email' onChange={handleChange} />
					<input type='password' placeholder='PASSWORD' name='password' onChange={handleChange} />
					<button className='btn' onClick={() => submitLogin()}>
						SUBMIT
					</button>
					<div className='register flex font-five'>
						<p>Don't have an account?</p>
						<p id='register' onClick={() => toggleRegister()}>
							Register Here
						</p>
					</div>
				</div>
				<div className='overlay' onClick={() => toggleMenu('login')}></div>
			</>
		)
	}
}
