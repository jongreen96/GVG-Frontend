import { useStripe } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

export default function Confirmation() {
	return (
		<div className='page'>
			<h1 className='font-one'>Confirmation</h1>
			<Link to='/'>
				<p className='font-five cta'>Go to Homepage</p>
			</Link>
		</div>
	);
}
