import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../store/product/productSlice';
import { selectUser } from '../store/auth/authSlice';
import { ProductTile } from '../components/ProductTile';
import { useEffect, useState } from 'react';
import { getReviewsByProductId } from '../store/product/productAPI';
import { addItem } from '../store/cart/cartAPI';
import Back from '../components/Back';
import { Reviews } from '../components/reviews';

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
				<Back />

				<h1 className='font-one'>{product.name}</h1>

				<div className='product'>
					<div id='product-image' className='tile'>
						<img src={product.images[0]} alt={product.title} />
					</div>

					<div id='product-info' className='tile'>
						<h2 className='font-two'>{product.name}</h2>
						<p className='font-five'>{product.category}</p>
						<div className='flex'>
							<p className='font-two cta'>£{product.price}</p>
							{product.name.includes('Bundle') ? (
								<p className='font-five discount'>
									£{(product.price * 1.4287).toFixed(2)}
								</p>
							) : null}
						</div>
						<button className='btn' type='button' onClick={() => addToBasket()}>
							Add to basket
						</button>
					</div>

					<div id='product-description' className='tile product-description'>
						<h2 className='font-three'>Description</h2>
						<p
							className='font-five desc'
							style={expand ? { height: 'auto' } : { height: '455px' }}
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

					<Reviews product={product} />

					<div id='product-related' className='tile'>
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
		);
	}
}
