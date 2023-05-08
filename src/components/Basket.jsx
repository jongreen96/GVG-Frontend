import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectCart } from '../store/cart/cartSlice';
import cross from '../assets/icons/cross.svg';
import { removeItem } from '../store/cart/cartAPI';
import { currencyFormatter } from '../utilities/currency';

export function Basket({ toggleMenu }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const basket = useSelector(selectCart);

	let total =
		basket
			?.reduce((acc, item) => acc + item.price * item.quantity, 0)
			.toFixed(2) || 0;

	const removeItemFromBasket = (id) => {
		dispatch(removeItem(id));
	};

	if (total !== '0.00') {
		return (
			<>
				<div className='basket flex-column'>
					<div className='basket-header flex'>
						<h2 className='font-three'>Basket</h2>

						<p className='font-four'>
							Total: <span className='cta'>{currencyFormatter(total)}</span>
						</p>
					</div>

					<ul className='basket-list'>
						{basket.map((item) => (
							<div className='basket-item flex' key={item.product_id}>
								<p className='font-five'>{item.quantity}x</p>
								<img src={item.images[0]} alt={item.name} />
								<div
									className='basket-item-info'
									onClick={() => navigate(`/products/${item.product_id}`)}
								>
									<p className='font-four'>{item.name}</p>
									<p className='font-four cta'>
										{currencyFormatter(item.price * item.quantity)}
									</p>
								</div>
								<img
									src={cross}
									alt='cross'
									className='icon'
									onClick={(e) => removeItemFromBasket(item.product_id)}
								/>
							</div>
						))}
					</ul>

					<Link to='/checkout'>
						<button className='btn' id='checkout'>
							Checkout
						</button>
					</Link>
				</div>

				<div className='overlay' onClick={() => toggleMenu('basket')}></div>
			</>
		);
	} else {
		return (
			<>
				<div className='basket flex-column'>
					<div className='basket-header flex'>
						<h2 className='font-three'>Basket</h2>
					</div>

					<p className='font-five'>Your basket is empty</p>
				</div>

				<div className='overlay' onClick={() => toggleMenu('basket')}></div>
			</>
		);
	}
}
