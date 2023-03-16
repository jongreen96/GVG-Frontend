import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import '../styles/sideMenu.css'

export function SideMenu() {
	return (
		<div className='side-menu flex-column font-three'>
			<ul className='side-menu-items'>
				<MenuItems />
			</ul>
			<ul className='side-menu-footer'>
				<li>
					<Link to='/about'>
						<p>About</p>
					</Link>
				</li>
				<li>
					<Link to='/about'>
						<p>Contact Us</p>
					</Link>
				</li>
			</ul>
		</div>
	)
}
