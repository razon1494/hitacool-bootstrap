import React from 'react';
import './Home.css';
import Executive from '../../components/Executive/Executive';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Slider from '../../components/Slider/Slider';
import Shop from '../../components/Shop/Shop';
// import ContactUs from '../../ContactUs/ContactUs';
const Home = () => {
    return (
        <div>
      <NavigationBar />
      <Slider />
            <Executive />
            <Shop></Shop>
            {/* <ContactUs></ContactUs> */}


        </div>
    );
};

export default Home;