import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import MainGame from './pages/MainGame';
import Footer from './components/Footer';
import Header from './components/Header';


export default props => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path={"/"} element={<MainGame />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
};