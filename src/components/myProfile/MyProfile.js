import './MyProfile.css';
import DetailsList from './DetailsList';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

const MyProfile = () => {

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='הפרופיל שלי' />
				<div className='contactPage'>
					<DetailsList />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default MyProfile
