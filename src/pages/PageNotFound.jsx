import { Link } from 'react-router-dom';
import Back from '../components/Back';

export default function PageNotFound() {
	return (
		<div className='page'>
			<Back />

			<h1 className='font-one'>404: Page not found</h1>
			<Link to='/'>
				<p className='font-five cta'>Go to Homepage</p>
			</Link>
		</div>
	);
}
