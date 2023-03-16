import logo from '../assets/logo.svg'
import basketIcon from '../assets/basket.svg'
import menuIcon from '../assets/menu.svg'
import profileIcon from '../assets/profile.svg'
import searchIcon from '../assets/search.svg'
import { MenuItems } from './MenuItems'
import { SideMenu } from './SideMenu'
import { Search } from './Search'

import '../styles/navigation.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function NavBar() {
	const [menu, setMenu] = useState(false)
	const toggleMenu = () => {
		setMenu(!menu)
		setSearch(false)
	}

	const [search, setSearch] = useState(false)
	const toggleSearch = () => {
		setSearch(!search)
		setMenu(false)
	}

	return (
		<>
			<nav className='bg-white' role='navigation' aria-label='main navigation'>
				<div className='navbar flex'>
					<div className='nav-left flex'>
						<img src={menuIcon} alt='Menu' onClick={() => toggleMenu()} className='icon' aria-label='Menu button' role='button' />
						<img src={searchIcon} alt='Search' onClick={() => toggleSearch()} className='icon' aria-label='Search button' role='button' />
					</div>
					<div className='nav-center'>
						<Link to='/'>
							<img src={logo} alt='GVG Logo' className='logo' />
						</Link>
					</div>
					<div className='nav-right flex'>
						<Link to='/account'>
							<img src={profileIcon} alt='Profile' className='icon' aria-label='Profile button' role='button' />
						</Link>
						<img src={basketIcon} alt='Basket' className='icon' aria-label='Basket button' role='button' />
					</div>
				</div>
				<ul className='navbar-menu flex font-three'>
					<MenuItems />
				</ul>
				<div className='navbar-offer'> All bundles 30% off! </div>
				{menu && <SideMenu toggleMenu={toggleMenu} />}
				{search && <Search toggleSearch={toggleSearch} />}
			</nav>
		</>
	)
}
