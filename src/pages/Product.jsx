import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../store/product/productSlice';
import { selectUser } from '../store/auth/authSlice';
import { ProductTile } from '../components/ProductTile';
import { useEffect, useState } from 'react';
import { getReviewsByProductId } from '../store/product/productAPI';
import { addItem } from '../store/cart/cartAPI';

export default function Product() {
	const dispatch = useDispatch();

	let { productId } = useParams();
	productId = Number(productId);
	const products = useSelector(selectAllProducts);
	const product = products?.find((prod) => prod.id === productId);
	const [productLoaded, setProductLoaded] = useState(false);

	const user = useSelector(selectUser);

	useEffect(() => {
		if (product) {
			setProductLoaded(true);
		}
	}, [product]);

	useEffect(() => {
		dispatch(getReviewsByProductId(productId));
	}, [productLoaded, productId]);

	const [expand, setExpand] = useState(false);

	const addToBasket = () => {
		user
			? dispatch(addItem(productId))
			: document.getElementById('login').click();
	};

	if (!product) {
		return <div className='page'>Product not found</div>;
	} else {
		return (
			<div className='page'>
				<p
					className='back font-five cta'
					onClick={() => window.history.back()}
				>
					&lt; Back
				</p>
				<h1 className='font-one'>{product.name}</h1>

				<div className='product'>
					<div id='product-image' className='tile'>
						<img src={product.images[0]} alt={product.title} />
					</div>

					<div id='product-info' className='tile'>
						<h2 className='font-two'>{product.name}</h2>
						<p className='font-five'>{product.category}</p>
						<p className='font-two cta'>£{product.price}</p>
						<button
							className='btn'
							type='button'
							onClick={() => addToBasket()}
						>
							Add to basket
						</button>
					</div>

					<div
						id='product-description'
						className='tile product-description'
					>
						<h2 className='font-three'>Description</h2>
						<p
							className='font-five desc'
							style={
								expand
									? { height: 'auto' }
									: { height: '455px' }
							}
						>
							{product.description}
						</p>
						<p
							className='font-five more special-link'
							onClick={() => setExpand(!expand)}
						>
							{expand ? 'Show less' : 'Show More'}
						</p>
					</div>

					<div id='product-review' className='tile'>
						<h2 className='font-three'>Reviews</h2>
						<div className='review flex-column'>
							{product.reviews ? (
								product.reviews.map((review, i) => {
									return (
										<div className='review-item' key={i}>
											<div>
												<p className='font-four'>
													{'★'.repeat(review.score)}
													{` - ${review.first_name} ${review.last_name}`}
												</p>
												<p className='font-five'>
													{review.created
														.slice(0, 10)
														.replaceAll('-', '/')}
												</p>
											</div>
											<p className='font-five'>
												{review.description}
											</p>
											<div className='review-images'>
												{review.images &&
													review.images.map(
														(img, i) => (
															<img
																src={img}
																alt='review'
																key={i}
															/>
														)
													)}
											</div>
										</div>
									);
								})
							) : (
								<p className='font-five'>No reviews yet</p>
							)}
						</div>
					</div>

					<div id='product-related' className='tile'>
						<h2 className='font-three'>Related Products</h2>
						<div className='related-products'>
							{products
								.filter(
									(prod) => prod.category === product.category
								)
								.map((prod, i) => {
									if (i < 4) {
										return (
											<ProductTile
												key={prod.id}
												product={prod}
											/>
										);
									}
								})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
