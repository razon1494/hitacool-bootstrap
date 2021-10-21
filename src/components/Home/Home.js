import React from 'react';
import './Home.css';
import Executive from '../../components/Executive/Executive';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Slider from '../../components/Slider/Slider';
import Shop from '../../components/Shop/Shop';
// import ContactUs from '../../ContactUs/ContactUs';
import ContacUs from '../ContactUs/ContactUs'
const Home = () => {
    return (
        <div>

      <Slider />
            <Executive />
            <Shop></Shop>
            <ContacUs></ContacUs>


        </div>
    );
};

export default Home;