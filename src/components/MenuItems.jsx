import { NavLink } from 'react-router-dom'

export function MenuItems() {
	return (
		<>
			<li className='navbar-item'>
				<NavLink to='/products'>
					<p>All Products</p>
				</NavLink>
			</li>
			<li className='navbar-item'>
				<NavLink to='/products'>
					<p>On Sale</p>
				</NavLink>
			</li>
			<li className='navbar-item'>
				<NavLink to='/products'>
					<p>Phones</p>
				</NavLink>
			</li>
			<li className='navbar-item'>
				<NavLink to='/products'>
					<p>Tablets</p>
				</NavLink>
			</li>
			<li className='navbar-item'>
				<NavLink to='/products'>
					<p>Consoles</p>
				</NavLink>
			</li>
		</>
	)
}
