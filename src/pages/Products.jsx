import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/product/productSlice';
import { ProductTile } from '../components/ProductTile';
import '../styles/products.css';
import { useLocation } from 'react-router-dom';
import Back from '../components/Back';

export default function Products() {
	const location = useLocation();
	const search = new URLSearchParams(location.search).get('search');

	const products = useSelector(selectAllProducts)?.filter(
		(product) =>
			product.name.toLowerCase().includes(search?.toLowerCase() || '') ||
			product.description.toLowerCase().includes(search?.toLowerCase() || '') ||
			product.category.toLowerCase().includes(search?.toLowerCase() || '')
	);

	products?.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
			return -1;
		}
		if (a.name.toLowerCase() > b.name.toLowerCase()) {
			return 1;
		}
		return 0;
	});

	return (
		<div className='page'>
			<Back />

			<h1 className='font-one'>All Products</h1>
			<div className='products'>
				{products?.map((product) => {
					return <ProductTile key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
