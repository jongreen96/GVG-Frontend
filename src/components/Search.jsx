import { useNavigate } from 'react-router-dom';

export function Search({ toggleMenu }) {
	const navigate = useNavigate();

	const handleChange = (e) => {
		if (e.key === 'Enter') {
			navigate(`/products?search=${e.target.value}`);
			toggleMenu('search');
		}
	};

	return (
		<>
			<div className='search font-three'>
				<input type='text' placeholder='SEARCH...' onKeyDown={handleChange} />
			</div>

			<div className='overlay' onClick={() => toggleMenu('search')}></div>
		</>
	);
}
