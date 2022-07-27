import React, { useEffect } from 'react';
import DetailSquare from './DetailSquare';

const DetailsList = () => {

	const containerArr = [
		{
			img: '/images/contact/managerAccount.png',
			info: 'עדי מזרחי',
    		descrip: 'ערוך',
		},
		{
			img: '/images/contact/user2.png',
			info: 'פרטי התקשרות',
     		descrip: 'שם, פלאפון, אימייל',
		},
		{
			img: '/images/contact/location.png',
			info: 'כתובת',
      		descrip: 'שדרות רגר 101, באר שבע',
		},
		{
			img: '/images/contact/star.png',
			info: 'המומחים שלי',
      		descrip: '12 מומחים',
		},
		{
			img: '/images/contact/check.png',
			info: 'רשימת בקרה',
      		descrip: 'לו"ז, ביקורות ועוד',
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