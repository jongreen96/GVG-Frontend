import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/product/productSlice';
import { ProductTile } from '../components/ProductTile.jsx';

export default function Home() {
	const products = useSelector(selectAllProducts);

	if (!products) {
		return <h1 className='page font-one'>Loading...</h1>;
	} else {
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
							src='https://i.etsystatic.com/17366700/r/il/2532a6/3500367506/il_1588xN.3500367506_jt5y.jpg'
							alt='All Products'
						/>
						<h3 className='font-three'>All Products</h3>
					</div>

					<div className='tile'>
						<img
							src='https://i.etsystatic.com/17366700/r/il/2532a6/3500367506/il_1588xN.3500367506_jt5y.jpg'
							alt='All Products'
						/>
						<h3 className='font-three'>Bundles</h3>
					</div>

					<div className='tile'>
						<img
							src='https://i.etsystatic.com/17366700/r/il/2532a6/3500367506/il_1588xN.3500367506_jt5y.jpg'
							alt='All Products'
						/>
						<h3 className='font-three'>Reviews</h3>
					</div>

					<div className='tile'>
						<img
							src='https://i.etsystatic.com/17366700/r/il/2532a6/3500367506/il_1588xN.3500367506_jt5y.jpg'
							alt='All Products'
						/>
						<h3 className='font-three'>Decals</h3>
					</div>

					<div className='tile'>
						<img
							src='https://i.etsystatic.com/17366700/r/il/2532a6/3500367506/il_1588xN.3500367506_jt5y.jpg'
							alt='All Products'
						/>
						<h3 className='font-three'>Consoles</h3>
					</div>
				</div>

				<h2 className='font-one'>All Products</h2>
				<div className='products'>
					{products?.map((product) => {
						return (
							<ProductTile key={product.id} product={product} />
						);
					})}
				</div>
			</div>
		);
	}
}
