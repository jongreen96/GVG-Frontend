export default function Order({ orderDetails }) {
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
					<p className='font-four'>{orderDetails.created.slice(0, 10)}</p>
				</div>
			</div>

			<div>
				<h3 className='font-three'>Products:</h3>
				{orderDetails.items.map((item, i) => {
					return (
						<p key={i} className='font-four'>
							{item.quantity} x {item.name}
						</p>
					);
				})}
			</div>

			<div>
				<h3 className='font-three'>Total:</h3>
				<p className='font-four'>${orderDetails.total}</p>
			</div>
		</div>
	);
}
