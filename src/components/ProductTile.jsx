import { useNavigate } from 'react-router-dom';

export const ProductTile = ({ product }) => {
	const navigate = useNavigate();

	return (
		<div className='product-tile tile' onClick={() => navigate(`/products/${product.id}`)}>
			<img src={product.images[0]} alt={product.name} />
			<div className='product-tile-info'>
				<h3 className='font-four'>{product.name}</h3>
				<div className='product-tile-details flex'>
					<h4 className='font-five'>{product.category}</h4>
					<p className='font-four special-link'>£{product.price}</p>
				</div>
			</div>
		</div>
	);
};
