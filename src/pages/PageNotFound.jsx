import { Link } from 'react-router-dom';

export default function PageNotFound() {
	return (
		<div className='page'>
			<p
				className='back font-five cta'
				onClick={() => window.history.back()}
			>
				&lt; Back
			</p>
			<h1 className='font-one'>404: Page not found</h1>
			<Link to='/'>
				<p className='font-five cta'>Go to Homepage</p>
			</Link>
		</div>
	);
}
