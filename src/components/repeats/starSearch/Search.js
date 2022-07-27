import './Search.css';

const Search = ({icon}) => {
	return (
		<div className='SearchDiv' >
			<div className='Search' >
				<img className='SearchImg' src='/images/search/search.png' />
				<input placeholder='חפש שם' type='search' className='SearchInput' />
			</div>
			<img className='searchStar' src={icon} />
		</div>
	)
}

export default Search