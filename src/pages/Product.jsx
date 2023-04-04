import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../store/product/productSlice';

export default function Product() {
	const { productId } = useParams();
	const products = useSelector(selectAllProducts);
	let product = products?.find((product) => product.id === Number(productId));

	if (!product) {
		return <div className='page'>Product not found</div>;
	} else {
		return (
			<div className='page'>
				<div className='product'>
					<div className='product-images tile'>
						<img src={product.images[0]} alt={product.title} />
					</div>

					<div className='product-info tile'>
						<h1 className='font-two'>{product.name}</h1>
						<p className='font-five'>{product.category}</p>
						<p className='font-two'>£{product.price}</p>
						<button className='btn'>Add to basket</button>
					</div>

					<div className='product-description tile'>
						<h2 className='font-three'>Description</h2>
						<p className='font-five'>{product.description}</p>
					</div>
				</div>
			</div>
		);
	}
}
