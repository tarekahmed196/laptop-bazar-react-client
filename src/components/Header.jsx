import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Header;