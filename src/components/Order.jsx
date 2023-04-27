import { useDispatch } from 'react-redux';
import downloadIcon from '../assets/icons/download.svg';
import { setDownloaded } from '../store/order/orderAPI';
import { downloadFile } from '../utilities/api';
import { useState } from 'react';
import CreateReview from './CreateReview';

export default function Order({ orderDetails, user }) {
	const dispatch = useDispatch();
	const [review, setReview] = useState(false);

	const handleDownload = (downloadLink, productId) => {
		return () => {
			if (downloadLink) {
				downloadFile(downloadLink);

				const itemInfo = { id: orderDetails.id, productId };
				dispatch(setDownloaded(itemInfo));
			}
		};
	};

	return (
		<div className='order tile flex-column'>
			<div className='order-details'>
				<div>
					<h3 className='font-three'>Order:</h3>
					<p className='font-four'>{orderDetails.id}</p>
				</div>
				<div>
					<h3 className='font-three'>Status:</h3>
					<p className='font-four'>{orderDetails.status}</p>
				</div>
				<div>
					<h3 className='font-three'>Date:</h3>
					<p className='font-four'>
						{orderDetails.created.slice(0, 10).replaceAll('-', '/')}
					</p>
				</div>
			</div>

			<div className='products-list'>
				<div className='flex'>
					<h3 className='font-three'>Products:</h3>
					<p className='font-five'>click to download</p>
				</div>
				{orderDetails.items?.map((item, i) => {
					return (
						<div
							key={i}
							className='order-product'
							onClick={handleDownload(item.download_link, item.product_id)}
						>
							<img src={downloadIcon} alt='download' className='icon' />
							<p className='font-four'>
								{item.quantity} x {item.name}
							</p>
						</div>
					);
				})}
			</div>

			<div className='flex-between'>
				<div>
					<h3 className='font-three'>Total:</h3>
					<p className='font-four'>£{orderDetails.total}</p>
				</div>
				<button
					className='btn btn-primary review-btn'
					onClick={() => setReview(!review)}
				>
					Review
				</button>
			</div>

			{review && (
				<CreateReview
					orderDetails={orderDetails}
					user={user}
					review={review}
					setReview={setReview}
				/>
			)}
		</div>
	);
}
