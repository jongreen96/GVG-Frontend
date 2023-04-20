import { useNavigate } from 'react-router-dom';
import backIcon from '../assets/icons/back.svg';

export default function Back() {
	const navigate = useNavigate();

	return (
		<div className='back' onClick={() => navigate(-1)}>
			<img src={backIcon} alt='back' className='back icon cta' />
			<p className='back font-four cta'>Back</p>
		</div>
	);
}
