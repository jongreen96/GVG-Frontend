import logo from '../assets/logo.svg'
import basket from '../assets/basket.svg'
import menu from '../assets/menu.svg'
import profile from '../assets/profile.svg'
import search from '../assets/search.svg'
import { MenuItems } from './MenuItems'

import '../styles/navBar.css'
import { Link } from 'react-router-dom'

export function NavBar() {
	return (
		<>
			<nav className='bg-white' role='navigation' aria-label='main navigation'>
				<div className='navbar flex'>
					<div className='nav-left flex'>
						<img src={menu} alt='Menu' className='menu icon' aria-label='Menu button' role='button' />
						<img src={search} alt='Search' className='search icon' aria-label='Search button' role='button' />
					</div>
					<div className='nav-center'>
						<Link to='/'>
							<img src={logo} alt='GVG Logo' className='logo' />
						</Link>
					</div>
					<div className='nav-right flex'>
						<Link to='/account'>
							<img src={profile} alt='Profile' className='profile icon' aria-label='Profile button' role='button' />
						</Link>
						<img src={basket} alt='Basket' className='basket icon' aria-label='Basket button' role='button' />
					</div>
				</div>
				<ul className='navbar-menu flex font-three'>
					<MenuItems />
				</ul>
				<div className='navbar-offer'> All bundles 30% off! </div>
			</nav>
		</>
	)
}
