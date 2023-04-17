export default function Privacy() {
	return (
		<div className='page'>
			<p
				className='back font-five cta'
				onClick={() => window.history.back()}
			>
				&lt; Back
			</p>
			<h1 className='font-one'>Privacy Policy</h1>
			<div className='tile flex-column'>
				<p className='font-four'>
					At Green Vinyl Graphics, we take your privacy seriously.
					This privacy policy describes how we collect, use, and
					protect your personal information when you visit our website
					and place orders for our products.
				</p>
				<div>
					<p className='font-three'>Information we collect</p>
					<p className='font-four'>
						We collect personal information that you provide to us,
						such as your name, email address, and mailing address.
						We collect this information through online forms on our
						website when you place an order for our products.
					</p>
				</div>
				<div>
					<p className='font-three'>How we use your information</p>
					<p className='font-four'>
						We use your personal information to process and fulfill
						your orders for our products. We may also use your
						personal information to communicate with you about your
						orders or to send you marketing emails about our
						products.
					</p>
				</div>

				<div>
					<p className='font-three'>Sharing your information</p>
					<p className='font-four'>
						We do not share your personal information with any third
						parties. We may disclose your personal information if
						required to do so by law or in response to a court
						order.
					</p>
				</div>

				<div>
					<p className='font-three'>Security</p>
					<p className='font-four'>
						We take appropriate measures to protect your personal
						information from unauthorized access, use, or
						disclosure. All passwords are encrypted, and our website
						complies with the OWASP security standards.
					</p>
				</div>

				<div>
					<p className='font-three'>
						Retention and deletion of information
					</p>
					<p className='font-four'>
						We store your personal information for as long as
						necessary to fulfill your orders and comply with legal
						obligations. If you request that we delete your personal
						information, we will do so promptly.
					</p>
				</div>

				<div>
					<p className='font-three'>Your rights</p>
					<p className='font-four'>
						You have the right to access, correct, or delete your
						personal information. If you have any questions or
						concerns about your personal information, please contact
						us at
						<span className='cta'>
							{' '}
							greenvinylgraphics@gmail.com
						</span>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
