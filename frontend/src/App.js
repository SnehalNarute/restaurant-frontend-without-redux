import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './container/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RestaurantScreen from './container/RestaurantScreen/RestaurantScreen'
import RestDetailScreen from './container/RestDetailScreen/RestDetailScreen';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomeScreen />} exact />
					<Route
						path='/mealtype/:id'
						element={<RestaurantScreen />}
					/>
					<Route path='/restaurant/:id' element={<RestDetailScreen />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
