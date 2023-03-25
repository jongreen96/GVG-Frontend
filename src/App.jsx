import { Routes, Route } from 'react-router-dom';
import { selectUser } from './store/auth/authSlice.js';
import { checkLoginStatus } from './store/auth/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import About from './pages/About.jsx';
import Account from './pages/Account.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
	const dispatch = useDispatch();

	const user = useSelector(selectUser);

	useEffect(() => {
		dispatch(checkLoginStatus());
	}, []);

	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/account' element={user ? <Account /> : <Home />} />
				<Route path='/product' element={<Product />} />
				<Route path='/products' element={<Products />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
