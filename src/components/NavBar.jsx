import logo from '../assets/logo.svg'
import basketIcon from '../assets/basket.svg'
import menuIcon from '../assets/menu.svg'
import profileIcon from '../assets/profile.svg'
import searchIcon from '../assets/search.svg'
import { MenuItems } from './MenuItems'
import { SideMenu } from './SideMenu'
import { Search } from './Search'
import { Login } from './Login'

import '../styles/navigation.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export function NavBar() {
	const [menu, setMenu] = useState({ menu: false, search: false, login: false })
	const toggleMenu = (button) => {
		setMenu({ menu: false, search: false, login: false, [button]: !menu[button] })
	}

	const user = useSelector((state) => state.auth.user)

	return (
		<>
			<nav className='bg-white' role='navigation' aria-label='main navigation'>
				<div className='navbar flex'>
					<div className='nav-left flex'>
						<img src={menuIcon} alt='Menu' onClick={() => toggleMenu('menu')} className='icon' aria-label='Menu button' role='button' />
						<img src={searchIcon} alt='Search' onClick={() => toggleMenu('search')} className='icon' aria-label='Search button' role='button' />
					</div>
					<div className='nav-center'>
						<Link to='/'>
							<img src={logo} alt='GVG Logo' className='logo' />
						</Link>
					</div>
					<div className='nav-right flex'>
						{user ? (
							<Link to='/account'>
								<img src={profileIcon} alt='Profile' className='icon' aria-label='Profile button' role='button' />
							</Link>
						) : (
							<img src={profileIcon} alt='Profile' onClick={() => toggleMenu('login')} className='icon' aria-label='Profile button' role='button' />
						)}
						<img src={basketIcon} alt='Basket' className='icon' aria-label='Basket button' role='button' />
					</div>
				</div>
				<ul className='navbar-menu flex font-three'>
					<MenuItems />
				</ul>
				<div className='navbar-offer'> All bundles 30% off! </div>
				{menu.menu && <SideMenu toggleMenu={toggleMenu} />}
				{menu.search && <Search toggleMenu={toggleMenu} />}
				{menu.login && <Login toggleMenu={toggleMenu} />}
			</nav>
		</>
	)
}
