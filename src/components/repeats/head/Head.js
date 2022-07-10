import './Head.css';
import Menu from '../menu/Menu'
// import HeadNotifications from '../../notificationsPages/headNotifications/HeadNotifications'
import React, { useEffect } from 'react';

const Head = ({text}) => {

	const display = (className) => {
		const item = document.querySelector(className)
		if (item.style.display === 'block') {
			item.style.display = 'none';
		} else {
			item.style.display = 'block';
		}
		const headNotifications = document.querySelector('.headNotifications')
		if (className === '.menu') {
			headNotifications.style.display = 'none'
		}
	}

	// const changeHeadNotPosition = () => {
	// 	const head = document.querySelector('.head')
	// 	const headNotifications = document.querySelector('.headNotifications')
	// 	if (head !== null) {
	// 		let rightPosition = head.getBoundingClientRect().y + 38
	// 		headNotifications.style.top = `${rightPosition}px`
	// 	}
	// }

	// useEffect(() => {
	// 	changeHeadNotPosition()
	// 	document.addEventListener("scroll", changeHeadNotPosition);
	// },[]);

	return (
		<>
			<div className='head' >
				<img onClick={() => display('.menu')} className='menuIcon' src="/images/head/menu.png" width='19px' />
				<div className='headHeader' >{text}</div>
				<img onClick={() => display('.headNotifications')} className='bell' src="/images/head/bell.png" width='19px' />
			</div>
			<div className='menu' >
				<img onClick={() => display('.menu')} className='menuEsc' src='/images/head/esc.png' />
				<Menu display={display} />
			</div>
			{/* <HeadNotifications /> */}
		</>
	)
}

export default Head