import { useLocation, useNavigate } from 'react-router-dom';
import backIcon from '../assets/icons/back.svg';

export default function Back() {
	const navigate = useNavigate();
	const location = useLocation();

	if (location.pathname === '/confirmation') {
		return (
			<div className='back' onClick={() => navigate('/')}>
				<img src={backIcon} alt='back' className='back icon cta' />
				<p className='back font-four cta'>Home</p>
			</div>
		);
	} else {
		return (
			<div className='back' onClick={() => navigate(-1)}>
				<img src={backIcon} alt='back' className='back icon cta' />
				<p className='back font-four cta'>Back</p>
			</div>
		);
	}
}
