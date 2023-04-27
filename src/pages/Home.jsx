import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/product/productSlice';
import { ProductTile } from '../components/ProductTile.jsx';
import logo from '../assets/icons/logo.svg';
import '../styles/homepage.css';

export default function Home() {
	const products = useSelector(selectAllProducts);

	if (!products) {
		return (
			<div className='page loading'>
				<img src={logo} alt='Loading' />
				<h1 className='font-one'>Loading</h1>
			</div>
		);
	}

	function handleClick() {
		const element = document.getElementById('best-sellers');
		const offset = 155;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition - offset;
		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}

	const sortedProducts = [...products]?.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
			return -1;
		}
		if (a.name.toLowerCase() > b.name.toLowerCase()) {
			return 1;
		}
		return 0;
	});

	return (
		<>
			<div className='hero'>
				<div className='container'>
					<div className='hero-text'>
						<div className='hero-info flex-column'>
							<h1 className='font-one'>Green Vinyl Graphics</h1>
							<p className='font-four'>
								Ready to take your creative dreams to the next level? Our
								digital templates are the perfect partner for your vinyl
								cutting, digital mockups, and graphic design projects. We
								specialize in precision-designed templates for Apple devices,
								and our collection has something for everyone. With our
								easy-to-use templates, you'll have the tools you need to create
								stunning designs in minutes.
							</p>

							<button className='btn' onClick={handleClick}>
								Shop Now
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='page'>
				<h2 className='font-one'>Best Sellers</h2>
				<div className='flex' id='best-sellers'>
					{products?.map((product) => {
						if (
							product.id === 14 ||
							product.id === 9 ||
							product.id === 41 ||
							product.id === 62
						)
							return (
								<ProductTile key={product.id} product={product} bestSeller />
							);
					})}
				</div>

				<h2 className='font-one'>All Products</h2>
				<div className='products'>
					{sortedProducts?.map((product) => {
						return <ProductTile key={product.id} product={product} />;
					})}
				</div>
			</div>
		</>
	);
}
