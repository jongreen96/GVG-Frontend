import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'

export function SideMenu(props) {
	const { toggleMenu } = props
	return (
		<>
			<div className='side-menu flex-column font-three'>
				<ul className='side-menu-items' onClick={() => toggleMenu('menu')}>
					<MenuItems />
				</ul>
				<ul className='side-menu-footer' onClick={() => toggleMenu('menu')}>
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
			<div className='overlay' onClick={() => toggleMenu('menu')}></div>
		</>
	)
}
