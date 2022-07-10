import './Pregnancy.css';
import React, { useEffect } from 'react';
import PregnancySquare from './pregnancySquare/PregnancySquare';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

const Pregnancy = () => {

	const pregnancyArr = [
		{
			img: '/images/pregnancy/mybody.jpg',
			text: 'ניקוי כניסה',
			link: '#',
		},
		{
			img: '/images/pregnancy/mybaby.jpg',
			text: 'תחזוקת מעליות',
			link: '#',
		},
		{
			img: '/images/pregnancy/fitness.jpg',
			text: 'פינוי זבל',
			link: '#',
		},
		{
			img: '/images/pregnancy/nutricion.jpg',
			text: 'אבטחה',
			link: '#',
		},
		{
			img: '/images/pregnancy/vitamins.jpg',
			text: 'חשמל',
			link: '#',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='השירותים שלי' />
				<main className='pregnancyPage' >
					{
						pregnancyArr.map((el, i) => {
							return (
								<PregnancySquare img={el.img} text={el.text} link={el.link} key={i} />
							)
						})
					}
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default Pregnancy