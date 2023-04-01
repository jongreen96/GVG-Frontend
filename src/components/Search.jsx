import { useDispatch } from 'react-redux';
import { setSearch } from '../store/search/searchSlice';

export function Search({ toggleMenu }) {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		if (e.key === 'Enter') {
			dispatch(setSearch(e.target.value));
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
