const DetailSquare = ({img, info, descrip}) => {

	return (
		<section className='detailSquare' >
			<div className='detailImgDiv' >
				<img className='detailImg' src={img} />
			</div>
			<div className='detailTextDiv' >
				<h1 className='detailInfo' >{info}</h1>
				<button className='detailEdit' >{descrip}</button>
			</div>
		</section>
	)
}

export default DetailSquare