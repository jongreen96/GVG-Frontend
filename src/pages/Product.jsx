import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../store/product/productSlice';

export default function Product() {
	const { productId } = useParams();
	const products = useSelector(selectAllProducts);
	let product = products?.find((product) => product.id === Number(productId));

	return (
		<div className='page'>
			<h1 className='font-one'>{product.name}</h1>
		</div>
	);
}
