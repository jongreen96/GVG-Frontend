import { useState } from 'react';
import { reviewProduct } from '../utilities/api';

export default function CreateReview({
	orderDetails,
	user,
	review,
	setReview,
}) {
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const product_id = e.target.product.value;
		const rating = e.target.rating.value;
		const message = e.target.message.value.trim();
		const reviewer = `${user.first_name} ${user.last_name}`;

		if ((rating === '1' || rating === '2') && message.length < 10) {
			setMessage(
				`Please enter a message to leave a ${rating} star review, this helps us improve our products and see what we can do better.`
			);
			return;
		}
		setMessage('');

		const review = { product_id, rating, message, reviewer };
		reviewProduct(review);
		setReview(!review);
	};

	return (
		<div className='create-review'>
			<h3 className='font-three'>Create Review:</h3>
			<form className='flex-column' onSubmit={handleSubmit}>
				<div className='flex-between'>
					<div className='flex-column'>
						<label htmlFor='product'>
							<p className='font-four'>Select Product to review:</p>
						</label>
						<select name='product' id='product'>
							{orderDetails.items?.map((item, i) => {
								return (
									<option key={i} value={item.product_id}>
										{item.name}
									</option>
								);
							})}
						</select>
					</div>

					<div className='flex-column'>
						<label htmlFor='rating'>
							<p className='font-four'>Rating:</p>
						</label>
						<select name='rating' id='rating' defaultValue={'5'}>
							<option value='5'>★★★★★</option>
							<option value='4'>★★★★</option>
							<option value='3'>★★★</option>
							<option value='2'>★★</option>
							<option value='1'>★</option>
						</select>
					</div>
				</div>

				<div>
					<label htmlFor='message'>
						<p className='font-four'>Message:</p>
					</label>
					<textarea
						name='message'
						id='message'
						rows='5'
						style={{ resize: 'none' }}
					></textarea>

					{message && <p className='font-five center'>{message}</p>}

					<button className='btn btn-primary'>Submit Review</button>
				</div>
			</form>
		</div>
	);
}
