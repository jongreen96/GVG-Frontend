import { useNavigate } from 'react-router-dom';
import Back from '../components/Back';

export default function Confirmation() {
	const navigate = useNavigate();

	return (
		<div className='page'>
			<Back />
			<h1 className='font-one'>Confirmation</h1>
			<div id='confirmation'>
				<div className='tile'>
					<h2 className='font-three'>Thank you for your order!</h2>

					<p className='font-four'>
						Your order has been placed and will be processed shortly.
					</p>

					<p className='font-four'>
						Your download will be available on your account page once it has
						been processed. Be aware that a product that has been downloaded
						cannot be refunded due to the nature of the product.
					</p>

					<p className='font-four'>
						Please note that it can take up to 24 hours for your order to be
						processed. If your order has not processed within 24 hours, or you
						simply have any questions please contact us using the{' '}
						<span className='cta'>Contact Us</span> page.
					</p>

					<button className='btn' onClick={() => navigate('/account')}>
						My Account
					</button>
					<button className='btn-naked' onClick={() => navigate('/')}>
						Home Page
					</button>
				</div>
			</div>
		</div>
	);
}
