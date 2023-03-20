export function Search(props) {
	const { toggleMenu } = props
	return (
		<>
			<div className='search font-three'>
				<input type='text' placeholder='SEARCH...' />
			</div>
			<div className='overlay' onClick={() => toggleMenu('search')}></div>
		</>
	)
}
