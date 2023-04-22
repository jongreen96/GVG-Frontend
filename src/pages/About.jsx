import { useState } from 'react';
import '../styles/about.css';
import { sendContactForm } from '../utilities/api';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/auth/authSlice';
import Back from '../components/Back';

export default function About() {
	const user = useSelector(selectUser);

	const [formComplete, setFormComplete] = useState(false);
	const [form, setForm] = useState({
		name: (user && `${user.first_name} ${user.last_name}`) || '',
		email: user?.email || '',
		message: '',
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		sendContactForm(form);
		setFormComplete(true);
	};

	return (
		<div className='page'>
			<Back />

			<h1 className='font-one'>About Us</h1>
			<div className='tile about-us flex'>
				<p className='font-five'>
					Welcome to Green Vinyl Graphics, where we offer the highest quality
					templates designed to elevate your brand and make your product stand
					out from the crowd. Our templates are not only perfect for cutting
					vinyl skins, but they also allow you to create stunning product
					mock-ups and other unique designs. We pride ourselves on our customer
					service that is always available to assist you with any question or
					concern you may have. Our designs are optimized to use with programs
					such as Cricut, Silhoutte, Cutting Master 4 and Adobe Illustrator
					making it easy for you to cut your designs with precision and acheive
					outstanding results. With thousands of satisfied customers, our store
					has received glowing reviews for our exceptional templates and
					friendly customer service. We invite you to check out our reviews and
					see for yourself why our customers love us!
				</p>
				<img src='https://greenvinylgraphics.com/iphone-14-pro-max.png' />
			</div>

			<h2 className='font-one'>Get in touch</h2>
			<div className='tile'>
				<p className='font-five'>
					Now its easier than ever to get in touch with us and ask us any
					questions or concerns you may have. Simply fill out the form below and
					we will get back to you as soon as possible to assist you with
					anything you need. We value our customers' opinions and want to ensure
					that your experience with us is top-notch. So don't hesitate to reach
					out to us and let us know how we can help you.
				</p>
				{formComplete ? (
					<p className='font-five'>
						Thank you for reaching out to us. We will get back to you as soon as
						possible. Have a great day!
					</p>
				) : (
					<form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
						<div className='flex'>
							<div className='flex-column'>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									name='name'
									required
									// placeholder='John Doe'
									onChange={(e) => handleChange(e)}
									value={form.name}
								/>
							</div>

							<div className='flex-column'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									required
									// placeholder='JohnDoe@example.com'
									onChange={(e) => handleChange(e)}
									value={form.email}
								/>
							</div>
						</div>

						<label htmlFor='message'>Message</label>
						<textarea
							name='message'
							rows='4'
							required
							placeholder='Enter message here...'
							onChange={(e) => handleChange(e)}
							value={form.message}
						/>

						<button type='submit' className='btn'>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
