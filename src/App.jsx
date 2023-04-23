import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/auth/authSlice';
import { checkLoginStatus } from './store/auth/authAPI';
import { getAllProducts } from './store/product/productAPI';
import { getCart } from './store/cart/cartAPI';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Account from './pages/Account';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import Confirmation from './pages/Confirmation';

function App() {
	const dispatch = useDispatch();
	const location = useLocation();

	const user = useSelector(selectUser);

	useEffect(() => {
		dispatch(checkLoginStatus());
		dispatch(getAllProducts());
	}, []);

	useEffect(() => {
		if (user) {
			dispatch(getCart());
		}
	}, [user]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:productId' element={<Product />} />
				<Route path='/privacy' element={<Privacy />} />
				<Route path='/terms' element={<Terms />} />
				{user && <Route path='/account' element={<Account />} />}
				{user && <Route path='/checkout' element={<Checkout />} />}
				{user && <Route path='/confirmation' element={<Confirmation />} />}
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
