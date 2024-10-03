import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/ui/navigation/Navbar'
import LandingPage from './home/LandingPage'
import CheckoutPage from './checkout/CheckoutPage'
import '../assets/css/global.css'

export default function Page() {
	const pagesDirectory = {
		checkoutPageElement: <CheckoutPage/>,
		landingPageElement: <LandingPage/>,
	}

	return (
		<div className="body">
			<Navbar />
			<Routes>
				<Route 
					path="/"
					exact
					element={pagesDirectory.landingPageElement}
				/>
				<Route 
					path="/checkout"
					element={pagesDirectory.checkoutPageElement}
				/>
			</Routes>
		</div>
	)
}

