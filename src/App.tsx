import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from './components';
import { ContactUs, Faq, JoinUs, Main, NoPageFound, Partners, Team } from './pages';

function App() {
	return (
		<div className='flex flex-col h-screen'>
			<Router>
				{/* <Header /> */}
				<ScrollToTop>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/joinus' element={<JoinUs />} />
						<Route path='/nftProject' element={<JoinUs />} />
						<Route path='/web2Project' element={<JoinUs />} />
						<Route path='/contactus' element={<ContactUs />} />
						<Route path='/faq' element={<Faq />} />
						<Route path='/team' element={<Team />} />
						<Route path='/partners' element={<Partners />} />
						<Route path='/*' element={<NoPageFound />} />
					</Routes>
				</ScrollToTop>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
