import { useNavigate } from 'react-router-dom';

export const ProductTile = ({ product }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/products/${product.id}`);
		window.scrollTo(0, 0);
	};

	return (
		<div className='product-tile tile' onClick={() => handleClick()}>
			<img src={product.images[0]} alt={product.name} />
			<div className='product-tile-info'>
				<h2 className='font-four'>{product.name}</h2>
				<div className='product-tile-details flex'>
					<h3 className='font-five'>{product.category}</h3>
					<p className='font-four cta'>£{product.price}</p>
				</div>
			</div>
		</div>
	);
};
