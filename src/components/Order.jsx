import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../store/order/orderAPI';
import { selectAllProducts } from '../store/product/productSlice';

export default function Order({ orderDetails }) {
	const { id, created, total, status, items } = orderDetails;
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);

	useEffect(() => {
		dispatch(getOrderDetails(id));
	}, []);

	return (
		<div className='order tile'>
			<div className='details'>
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
					<p className='font-four'>{created.slice(0, 10).replaceAll('-', '/')}</p>
				</div>
			</div>

			<div className='products-list'>
				<h3 className='font-three'>Products:</h3>
				<ul className='font-four'>
					{items?.map((item, i) => (
						<li key={i}>
							{item.quantity}x{' '}
							{
								products.find((product) => {
									return product.id === item.product_id;
								}).name
							}
						</li>
					))}
				</ul>
			</div>

			<div>
				<h3 className='font-three'>Total:</h3>
				<p className='font-four'>${total}</p>
			</div>
		</div>
	);
}
