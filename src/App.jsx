import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Products } from './pages/Products.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Product } from './pages/Product.jsx'
import { About } from './pages/About.jsx'
import { Account } from './pages/Account.jsx'
import { Footer } from './components/Footer.jsx'

import { selectUser, checkLoginStatus } from './store/auth/authSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkLoginStatus())
		console.log(user)
	}, [dispatch])

	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/account' element={<Account />} />
				<Route path='/product' element={<Product />} />
				<Route path='/products' element={<Products />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
