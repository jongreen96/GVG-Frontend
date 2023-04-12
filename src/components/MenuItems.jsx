import { NavLink } from 'react-router-dom';

export function MenuItems() {
	return (
		<>
			<li className='navbar-item'>
				<NavLink to='/'>
					<p>Home</p>
				</NavLink>
			</li>

			<li className='navbar-item'>
				<NavLink to='/products'>
					<p>All Products</p>
				</NavLink>
			</li>

			<li className='navbar-item'>
				<NavLink to='/products?search=iphone'>
					<p>iphones</p>
				</NavLink>
			</li>

			<li className='navbar-item'>
				<NavLink to='/products?search=ipad'>
					<p>ipads</p>
				</NavLink>
			</li>

			<li className='navbar-item'>
				<NavLink to='/products?search=nintendo'>
					<p>consoles</p>
				</NavLink>
			</li>

			<li className='navbar-item'>
				<NavLink to='/products?search=accessory'>
					<p>accessories</p>
				</NavLink>
			</li>
		</>
	);
}
