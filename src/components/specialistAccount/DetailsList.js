import React, { useEffect } from 'react';
import DetailSquare from './DetailSquare';

const DetailsList = () => {

	const containerArr = [
		{
			img: '/images/contact/specialistPhoto.png',
			info: 'אבי דוידוף',
    		descrip: 'ערוך',
		},
		{
			img: '/images/contact/user2.png',
			info: 'חשמלאי',
     		descrip: 'שם, פלאפון, אימייל',
		},
		{
			img: '/images/contact/location.png',
			info: 'כתובת',
      		descrip: 'שדרות רגר 131, באר שבע',
		},
		{
			img: '/images/contact/star.png',
			info: 'השירותים שלי',
      		descrip: 'מחיר ולו"ז',
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