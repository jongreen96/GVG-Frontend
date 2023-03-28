import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Order from '../components/Order';
import { selectUser } from '../store//auth/authSlice';
import { logout } from '../store/auth/authAPI';
import { getOrders } from '../store/order/orderAPI';
import { selectOrders } from '../store/order/orderSlice';
import '../styles/account.css';

export default function Account() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const orders = useSelector(selectOrders);

	const handleLogout = () => {
		dispatch(logout());
		navigate('/');
	};

	useEffect(() => {
		dispatch(getOrders());
	}, []);

	return (
		<div className='page account'>
			<div className='account-info'>
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
			</div>

			<div className='account-settings'>
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
			</div>

			<div className='account-orders'>
				<h2 className='font-one'>Order History</h2>
				{orders ? orders.map((order) => <Order key={order.id} orderDetails={order} />) : <p className='font-five'>No orders found</p>}
			</div>
		</div>
	);
}
