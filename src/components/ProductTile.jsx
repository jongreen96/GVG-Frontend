export const ProductTile = ({ product }) => {
	return (
		<div className='product-tile tile'>
			<img src={product.images[0]} alt={product.name} />
			<div className='product-info'>
				<h3 className='font-four'>{product.name}</h3>
				<div className='product-details flex'>
					<h4 className='font-five'>{product.category}</h4>
					<p className='font-four special-link'>£{product.price}</p>
				</div>
			</div>
		</div>
	);
};
