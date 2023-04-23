import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/product/productSlice';
import { ProductTile } from '../components/ProductTile.jsx';
import logo from '../assets/icons/logo.svg';

export default function Home() {
	const products = useSelector(selectAllProducts);

	if (!products) {
		return (
			<div className='page loading'>
				<img src={logo} alt='Loading' />
				<h1 className='font-one'>Loading</h1>
			</div>
		);
	}

	return (
		<div className='page'>
			<h1 className='font-one'>Best Sellers</h1>
			<div className='flex' id='best-sellers'>
				<ProductTile product={products[0]} />
				<ProductTile product={products[1]} />
				<ProductTile product={products[2]} />
				<ProductTile product={products[3]} />
			</div>

			<h2 className='font-one'>Quick Links</h2>
			<div id='categories'>
				<div className='tile'>
					<img
						src='https://gvg-backend.herokuapp.com/iphone-14-pro-max.png'
						alt='All Products'
					/>
					<h3 className='font-three'>All Products</h3>
				</div>

				<div className='tile'>
					<img
						src='https://gvg-backend.herokuapp.com/iphone-14-pro-max.png'
						alt='All Products'
					/>
					<h3 className='font-three'>Bundles</h3>
				</div>

				<div className='tile'>
					<img
						src='https://gvg-backend.herokuapp.com/iphone-14-pro-max.png'
						alt='All Products'
					/>
					<h3 className='font-three'>Reviews</h3>
				</div>

				<div className='tile'>
					<img
						src='https://gvg-backend.herokuapp.com/iphone-14-pro-max.png'
						alt='All Products'
					/>
					<h3 className='font-three'>Decals</h3>
				</div>

				<div className='tile'>
					<img
						src='https://gvg-backend.herokuapp.com/iphone-14-pro-max.png'
						alt='All Products'
					/>
					<h3 className='font-three'>Consoles</h3>
				</div>
			</div>

			<h2 className='font-one'>All Products</h2>
			<div className='products'>
				{products?.map((product) => {
					return <ProductTile key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
