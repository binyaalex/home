import './PregnancySquare.css';
import { Link } from "react-router-dom"

const PregnancySquare = ({img, text, link}) => {
	return (
		<Link to={link} className='pregnancySquare'>
			<img className='pregnancySquareImg' src={img} />
			<h1 className='pregnancySquareHeader' >{text}</h1>
		</Link>
	)
}

export default PregnancySquare