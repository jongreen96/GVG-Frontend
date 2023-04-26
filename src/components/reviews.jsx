import React, { useState, useEffect } from 'react';

export const Reviews = ({ product }) => {
	const [sortedReviews, setSortedReviews] = useState([]);
	const [numReviewsShown, setNumReviewsShown] = useState(5);

	useEffect(() => {
		if (product?.reviews) {
			const sorted = [...product.reviews].sort((a, b) => {
				if (a.score === b.score) {
					return new Date(b.created) - new Date(a.created);
				} else {
					return b.score - a.score;
				}
			});
			setSortedReviews(sorted);
		}
	}, [product]);

	return (
		<div id='product-review' className='tile'>
			<div className='review-header'>
				<h2 className='font-three'>Reviews</h2>
				<p className='font-three'>
					{' '}
					average:{' '}
					{product.reviews
						? (
								product.reviews.reduce((acc, curr) => acc + curr.score, 0) /
								product.reviews.length
						  ).toFixed(1) + ' ★'
						: 'No reviews yet'}
				</p>
			</div>
			<div className='review flex-column'>
				{product.reviews ? (
					sortedReviews.slice(0, numReviewsShown).map((review, i) => {
						return (
							<div className='review-item' key={i}>
								<div className='review-head'>
									<p className='font-four'>
										{'★'.repeat(review.score)}
										{'☆'.repeat(5 - review.score)}
										{` - ${review.reviewer}`}
									</p>
									<p className='font-five'>
										{review.created.slice(0, 10).replaceAll('-', '/')}
									</p>
								</div>
								<p className='font-five'>{review.description}</p>
								<div className='review-images'>
									{review.images &&
										review.images.map((img, i) => (
											<img src={img} alt='review' key={i} />
										))}
								</div>
							</div>
						);
					})
				) : (
					<p className='font-five'>No reviews yet</p>
				)}
				{numReviewsShown < sortedReviews.length ? (
					<button
						className='btn-naked'
						onClick={() => setNumReviewsShown(sortedReviews.length)}
					>
						Show all reviews
					</button>
				) : (
					<button className='btn-naked' onClick={() => setNumReviewsShown(5)}>
						Show less
					</button>
				)}
			</div>
		</div>
	);
};
