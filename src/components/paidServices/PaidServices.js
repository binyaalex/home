import './PaidServices.css';
import Search from '../repeats/starSearch/Search'
import DayPicker from '../repeats/daypicker/DayPicker'
import PaidServicesSquare from "./PaidServicesSquare"
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';


const PaidServices = () => {

	const reportSquareArr = [
		{
			header: 'בדיקת רופאה',
			text: 'בדיקת היסטוריה רפואית',
			hour: '08:00',
            price: `45`,
		},
		{
			header: 'מתן תרופות וויטמנים',
			text: 'ויטמין D, אומגה',
			hour: '08:30',
            price: `45`,
		},
		{
			header: 'עירוי',
			text: 'גלוקוז',
			hour: '11:00',
            price: `45`,
		},
		{
			header: 'תוצאות בדיקה',
			text: 'ספירת דם, ברזל',
			hour: '16:00',
            price: `45`,
		},
		{
			header: 'סיבוב ערב',
			text: 'בדיקה',
			hour: '18:00',
            price: `45`,
		},
		{
			header: 'זריקות',
			text: 'במידת הצורך',
			hour: '20:30',
            price: `45`,
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='דיווח יומי' />
				<div className='procedursPage reoprtPage'>
					<Search icon='/images/search/starSquare.png' />
					<DayPicker />
					<div className='procedursSquaresDiv'>
						{
							reportSquareArr.map((el, i) => {
								return (
									<PaidServicesSquare
										header={el.header}
										text={el.text}
										hour={el.hour}
										price={el.price}
										i={i}
										key={i} 
									/> 
								)
							})
						}
					</div>
				</div>
			</div>
			<Footer />
		</div>

	)
}

export default PaidServices