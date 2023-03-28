import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Order({ orderDetails }) {
	const { id, created, total, status } = orderDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrderDetails(id));
	}, []);

	return (
		<div className='order tile'>
			<div>
				<div>
					<h3 className='font-three'>Order:</h3>
					<p className='font-four'>{id}</p>
				</div>
				<div>
					<h3 className='font-three'>Status:</h3>
					<p className='font-four'>{status}</p>
				</div>
				<div>
					<h3 className='font-three'>Date:</h3>
					<p className='font-four'>{created}</p>
				</div>
			</div>

			<div>
				<h3 className='font-three'>Products:</h3>
			</div>

			<div>
				<h3 className='font-three'>Total:</h3>
				<p className='font-four'>${total}</p>
			</div>
		</div>
	);
}
