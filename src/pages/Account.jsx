import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../store//auth/authSlice';
import { logout } from '../store/auth/authAPI';

export default function Account() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	const handleLogout = () => {
		dispatch(logout());
		navigate('/');
	};

	return (
		<div className='page'>
			<h1 className='font-one'>Account Info</h1>
			<div className='tile flex-column'>
				<div>
					<h3 className='font-three'>Name:</h3>
					<p className='font-four'>
						{user.first_name} {user.last_name}
					</p>
				</div>

				<div>
					<h3 className='font-three'>Email:</h3>
					<p className='font-four'>{user.email}</p>
				</div>

				<div>
					<h3 className='font-three'>Username:</h3>
					{user.username ? <p className='font-four'>{user.username}</p> : <p className='font-five'>None</p>}
				</div>

				<div>
					<h3 className='font-three'>Address:</h3>
					{user.address ? <p className='font-four'>{user.address}</p> : <p className='font-five'>None</p>}
				</div>
			</div>

			<h2 className='font-one'>Settings</h2>
			<div className='tile flex-column'>
				<div className='font-four'>
					<p className='special-link'>Change account details</p>
					<p className='special-link'>Switch between dark / light mode</p>
					<p className='special-link'>Manage email preferences</p>
					<p className='special-link' onClick={() => handleLogout()}>
						Logout
					</p>
				</div>
			</div>

			<h2 className='font-one'>Order History</h2>
		</div>
	);
}
