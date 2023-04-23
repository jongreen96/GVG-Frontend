import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import { selectCart } from '../store/cart/cartSlice';
import { useEffect, useState } from 'react';
import { paymentIntent } from '../utilities/api';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import Back from '../components/Back';

const stripePromise = loadStripe('pk_test_DXtaGIXSvQX3ww0FVnt23HDM');

export default function Checkout() {
	const basket = useSelector(selectCart);
	const [total, setTotal] = useState(0);
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		let x = 0;
		basket.forEach((item) => {
			x += item.price * item.quantity;
		});
		setTotal(x.toFixed(2));
	}, [basket]);

	useEffect(() => {
		if (total > 0) {
			paymentIntent(total).then((res) => {
				setClientSecret(res);
			});
		}
	}, [total]);

	const appearance = {
		variables: {
			colorPrimary: '#16A093',
		},
	};

	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div className='page'>
			<Back />

			<h1 className='font-one'>Checkout</h1>

			<div className='checkout'>
				<div className='tile'>
					<h2 className='font-two'>Basket</h2>
					{basket?.map((item, i) => {
						return (
							<div className='item flex' key={i}>
								<img src={item.images[0]} alt={item.name} />
								<div className='info'>
									<h3 className='font-four'>{item.name}</h3>
									<p className='font-four'>{item.description}</p>
									<p className='font-four cta'>£{item.price}</p>
								</div>
							</div>
						);
					})}
					<div className='total'>
						<h4 className='font-three'>
							Total: <span className='cta'>£{total}</span>
						</h4>
					</div>
				</div>

				<div className='tile'>
					{clientSecret && (
						<Elements options={options} stripe={stripePromise}>
							<CheckoutForm />
						</Elements>
					)}
				</div>
			</div>
		</div>
	);
}
