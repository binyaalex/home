import './Menu.css';
import { Link } from "react-router-dom";

const Menu = ({display}) => {


	const menuItemsArr = [
		{
			link: '/account',
			text: 'הפרופיל שלי',
			img: '/images/head/menu/account.png',
		},
		{
			link: '/pregnancy',
			text: 'השירותים שלי',
			img: '/images/head/menu/pregnancy.png',
		},
		{
			link: '',
			text: 'שירותים בתשלום',
			img: '/images/head/menu/location.png',
		},
		{
			link: '',
			text: `הצ'אט של הבית`,
			img: '/images/head/menu/group_chat.png',
		},
		{
			link: '',
			text: `כל הצ'אט`,
			img: '/images/head/menu/chat.png',
		},
		{
			link: '/settings',
			text: 'הגדרות',
			img: '/images/head/menu/settings.png',
		},
		{
			link: '',
			text: 'יציאה',
			img: '/images/head/menu/out.png',
		},
	]

	return (
		<div className='mainList' >
			{
				menuItemsArr.map((el, i) => {
					return (
						<Link onClick={() => display('.menu')} className='menuItem' to={el.link} key={i} >
							<div className='menuItemIconDiv' >
								<img className='menuItemIcon' src={el.img} />
							</div>
							<h1 className='menuItemHeader' >{el.text}</h1>
						</Link>
					)
				})
			}
			
		</div>
	)
}

export default Menu