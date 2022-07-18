import './Pregnancy.css';
import React, { useEffect } from 'react';
import PregnancySquare from './pregnancySquare/PregnancySquare';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

const ServiceList = () => {

	const pregnancyArr = [
		{
			img: '/images/serviceList/clean.jpg',
			text: 'ניקוי כניסה',
			link: '#',
		},
		{
			img: '/images/serviceList/elevator.jpg',
			text: 'תחזוקת מעליות',
			link: '#',
		},
		{
			img: '/images/serviceList/garbage.jpg',
			text: 'פינוי זבל',
			link: '#',
		},
		{
			img: '/images/serviceList/security.jpg',
			text: 'אבטחה',
			link: '#',
		},
		{
			img: '/images/serviceList/repair.jpg',
			text: 'שיפוץ',
			link: '#',
		},
		{
			img: '/images/serviceList/electric.jpg',
			text: 'חשמל',
			link: '#',
		},
		{
			img: '/images/serviceList/plumbing.jpg',
			text: 'אינסטלציה',
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

export default ServiceList