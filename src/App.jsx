import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import MenuNav from './MenuNav'
import './App.css'

function App() {
	return (

			<div className='container-fluid wrapper'>
				<Router basename="/wipeout-records">
				<header className='row w-100 justify-content-between align-items-center bg-dark'>
					<div className='col-3 logo p-0 m-0'>
						<Link to='/home'><img className='img img-fluid ' src="./assets/wipoutImg3.png" alt="WipeOut Records logo" /></Link>
					</div>
					<h1 className='h1 menuTitle display-1 col-6 text-center'>WipeOut Records</h1>
					<div className='col-3 '>
						<MenuNav />
					</div>
				</header>

				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				{/* <footer><p>This is my footer</p></footer> */}
				{/* <div id="bg-img"></div> */}
				</Router>
			</div>

	)
}

export default App
