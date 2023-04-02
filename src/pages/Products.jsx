import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/product/productSlice';
import { ProductTile } from '../components/ProductTile';
import '../styles/products.css';
import { useLocation } from 'react-router-dom';

export default function Products() {
	const location = useLocation();
	const search = new URLSearchParams(location.search).get('search');

	const products = useSelector(selectAllProducts)?.filter((product) => product.name.toLowerCase().includes(search?.toLowerCase() || ''));

	return (
		<div className='page'>
			<h1 className='font-one'>All Products</h1>
			<div className='products'>
				{products?.map((product) => {
					return <ProductTile key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
