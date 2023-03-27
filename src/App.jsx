import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkLoginStatus } from './store/auth/authAPI';
import { selectUser } from './store/auth/authSlice';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Account from './pages/Account';
import Products from './pages/Products';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

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
				<Route path='/product' element={<Product />} />
				<Route path='/products' element={<Products />} />
				{user && <Route path='/account' element={<Account />} />}
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
