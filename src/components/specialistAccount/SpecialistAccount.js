import '../myProfile/MyProfile.css';
import DetailsList from './DetailsList';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

const SpecialistAccount = () => {

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='חשבון מומחה' />
				<div className='contactPage'>
					<DetailsList />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SpecialistAccount
