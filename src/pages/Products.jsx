import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/product/productSlice';
import { ProductTile } from '../components/ProductTile';
import '../styles/products.css';

export default function Products() {
	const products = useSelector(selectAllProducts);
	return (
		<div className='page'>
			<h1 className='font-one'>All Products</h1>
			<div className='products'>
				{
					// Map through the products array and return a product component for each product
					products?.map((product) => {
						return <ProductTile key={product.id} product={product} />;
					})
				}
			</div>
		</div>
	);
}
