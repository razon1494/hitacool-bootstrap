import React from 'react';
import './Home.css';
import Executive from '../../components/Executive/Executive';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Slider from '../../components/Slider/Slider';
import Shop from '../../components/Shop/Shop';
// import ContactUs from '../../ContactUs/ContactUs';
import ContacUs from '../ContactUs/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import MainShop from '../Shop/MainShop';
import {useState} from 'react';
import SelfContained from '../Self-contained/Self-Contained/SelfContained';
import AnimatedText from '../AnimatedText/AnimatedText';
import BlockAddress from '../BlockAddress/BlockAddress';
import Admin from '../AdminPanel/Admin/Admin';
// ..
AOS.init();
const Home=() => {
    const [toggle, setToggle]=useState(true);
    return (
        <div>

            {/* <Slider /> */}

            <div data-aos="fade-right" id='bannar'><AnimatedText /></div>
            <div data-aos="fade-left"><BlockAddress/> </div>
            <div data-aos="fade-right"><Admin/> </div>

            {/* <div data-aos="fade-up"><Executive /></div> */}
  <h1 className='text-center fw-bold my-5 executive-title'>EXPLORE OUR <span id='executive-title-span'>   EXECLUSIVE AC's</span> </h1>
            <div className="toggle text-center my-5">
                <button className={`mx-4 fs-2 ${toggle ? "active" : "deactive"}`} onClick={()=>setToggle(true)}>Split Type AC</button>
                <button className={`mx-4 fs-2 ${!toggle ? "active" : "deactive"}`}onClick={()=>setToggle(false)}>Self-Contianed Type AC</button>
            </div>
            {
                toggle ? <div data-aos="fade-up"><Shop></Shop></div> : <div data-aos="fade-up"><SelfContained></SelfContained></div>
            }
{/* <div data-aos="fade-up"><MainShop></MainShop></div> */}
            <div data-aos="fade-out"><ContacUs
                model='n/a'
                type1='n/a'
                acid='acid'
            ></ContacUs></div>



        </div>
    );
};

export default Home;