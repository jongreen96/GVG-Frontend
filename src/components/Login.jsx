import { useState } from 'react'

export function Login(props) {
	const { toggleLogin } = props
	const [register, setRegister] = useState(false)
	const toggleRegister = () => setRegister(!register)

	if (register) {
		return (
			<>
				<div className='login flex-column'>
					<p className='font-three'>REGISTER</p>
					<input type='text' placeholder='FIRST NAME' />
					<input type='text' placeholder='LAST NAME' />
					<input type='text' placeholder='EMAIL' />
					<input type='password' placeholder='PASSWORD' />
					<input type='password' placeholder='CONFIRM PASSWORD' />
					<button className='btn'>SUBMIT</button>
					<div className='register flex font-five'>
						<p>Already have an account?</p>
						<p id='register' onClick={() => toggleRegister()}>
							Login Here
						</p>
					</div>
				</div>
				<div className='overlay' onClick={() => toggleLogin()}></div>
			</>
		)
	} else {
		return (
			<>
				<div className='login flex-column'>
					<p className='font-three'>LOGIN</p>
					<input type='text' placeholder='EMAIL/USERNAME' />
					<input type='password' placeholder='PASSWORD' />
					<button className='btn'>SUBMIT</button>
					<div className='register flex font-five'>
						<p>Don't have an account?</p>
						<p id='register' onClick={() => toggleRegister()}>
							Register Here
						</p>
					</div>
				</div>
				<div className='overlay' onClick={() => toggleLogin()}></div>
			</>
		)
	}
}
