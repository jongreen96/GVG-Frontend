import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../store/product/productSlice';
import { ProductTile } from '../components/ProductTile';

export default function Product() {
	const { productId } = useParams();
	const products = useSelector(selectAllProducts);
	let product = products?.find((product) => product.id === Number(productId));

	const expand = () => {
		const desc = document.querySelector('.desc');
		desc.classList.toggle('expand');
	};

	if (!product) {
		return <div className='page'>Product not found</div>;
	} else {
		return (
			<div className='page'>
				<h1 className='font-one'>{product.name}</h1>

				<div className='product'>
					<div className='flex-column'>
						<div className='tile'>
							<img src={product.images[0]} alt={product.title} />
						</div>

						<div className='tile'>
							<h2 className='font-three'>Reviews</h2>
							<p className='font-five'>No reviews yet</p>
						</div>
					</div>

					<div className='flex-column'>
						<div className='tile'>
							<h2 className='font-two'>{product.name}</h2>
							<p className='font-five'>{product.category}</p>
							<p className='font-two'>£{product.price}</p>
							<button className='btn'>Add to basket</button>
						</div>

						<div className='tile product-description'>
							<h2 className='font-three'>Description</h2>
							<p className='font-five desc'>{product.description}</p>
							<p className='font-five more special-link' onClick={() => expand()}>
								Show More
							</p>
						</div>

						<div className='tile'>
							<h2 className='font-three'>Related Products</h2>
							<div className='related-products'>
								{products
									.filter((prod) => prod.category === product.category)
									.map((prod, i) => {
										if (i < 4) {
											return <ProductTile key={prod.id} product={prod} />;
										}
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
