import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'

import CustomNavbar from './components/Navbar/Navbar';
import Contact from './components/Pages/Contact/Contact'
import Portfolio from './components/Pages/Portfolio/Portfolio'
import Home from './components/Pages/Home/Home';
import FAQ from './components/Pages/FAQ/FAQ';

const RoutesWithNav = () => {

    return (
        <Fragment>
            <CustomNavbar />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/faq' element={<FAQ />} />
            </Routes>
        </Fragment>
    );
}

export default RoutesWithNav
