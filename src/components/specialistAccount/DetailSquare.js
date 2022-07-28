import { Link } from "react-router-dom"

const DetailSquare = ({img, info, descrip, link}) => {

	return (
		<Link className='detailSquare' to={link} >
			<div className='detailImgDiv' >
				<img className='detailImg' src={img} />
			</div>
			<div className='detailTextDiv' >
				<h1 className='detailInfo' >{info}</h1>
				<button className='detailEdit' >{descrip}</button>
			</div>
		</Link>
	)
}

export default DetailSquare