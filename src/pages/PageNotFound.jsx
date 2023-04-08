import { Link } from 'react-router-dom';

export default function PageNotFound() {
	return (
		<div className='page'>
			<h1 className='font-one'>404: Page not found</h1>
			<Link to='/'>
				<p className='font-five cta'>Go to Homepage</p>
			</Link>
		</div>
	);
}
