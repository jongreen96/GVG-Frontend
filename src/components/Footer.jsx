import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
	return (
		<footer className='bg-white font-five'>
			<div id='footer-1'>
				<p>Green Vinyl Graphics © 2023</p>
			</div>

			<div className='flex' id='footer-2'>
				<div className='footer-section'>
					<Link to='/about'>
						<p>About / Contact Us</p>
					</Link>
				</div>
				<div className='footer-section'>
					<Link to='/privacy'>
						<p className='align-right'>Privacy Policy</p>
					</Link>
					<Link to='/terms'>
						<p className='align-right'>Terms & Conditions</p>
					</Link>
				</div>
			</div>

			<div className='align-right' id='footer-3'>
				<p>
					Website designed by{' '}
					<a
						href='https://www.jongreen.dev'
						target='_blank'
						className='special-link'
					>
						jongreen.dev
					</a>
				</p>
			</div>
		</footer>
	);
}
