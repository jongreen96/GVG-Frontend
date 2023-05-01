import { useNavigate } from 'react-router-dom';

export const ProductTile = ({ product }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/products/${product.id}`);
	};

	return (
		<div className='product-tile tile' onClick={() => handleClick()}>
			<img src={product.images[0]} alt={product.name} />
			<div className='product-tile-info'>
				<h2 className='font-four'>{product.name}</h2>
				<div className='product-tile-details flex'>
					<h3 className='font-five'>{product.category}</h3>
					<div className='flex'>
						{product.name.includes('Bundle') ? (
							<p className='font-five discount'>
								£{(product.price * 1.4287).toFixed(2)}
							</p>
						) : null}
						<p className='font-four cta'>£{product.price}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
