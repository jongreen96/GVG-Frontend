export function Search(props) {
	const { toggleSearch } = props
	return (
		<>
			<div className='search font-three'>
				<input type='text' placeholder='SEARCH...' />
			</div>
			<div className='overlay' onClick={() => toggleSearch()}></div>
		</>
	)
}
