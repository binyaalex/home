import React, { useEffect } from 'react';
import DetailSquare from './DetailSquare';

const DetailsList = () => {

	const containerArr = [
		{
			img: '/images/contact/profilePhoto.png',
			info: 'אתי ליפשיץ',
      descrip: 'ערוך',
		},
		{
			img: '/images/contact/user2.png',
			info: 'פרטי התקשרות',
      descrip: 'שם, פלאפון, אימייל',
		},
		{
			img: '/images/contact/location.png',
			info: 'השירותים',
      descrip: 'שדרות רגר 8, באר שבע',
		},
		{
			img: '/images/contact/star.png',
			info: 'השירותים שהוזמנו',
      descrip: 'שדרות רגר 8, באר שבע',
		},
	]

	return (
		<main className='detailsList' >
			{
				containerArr.map((el, i) => {
					console.log(el.massageAfterBold)
					return (
						<DetailSquare
							img={el.img}
							info={el.info}
							descrip={el.descrip}
							key={i}
						/> 
					)
				})
			}
		</main>
	)
}

export default DetailsList