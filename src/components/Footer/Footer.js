import React from 'react';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.css'
const Footer = () => {
    return (
        <div>
<footer class="footer-distributed">

    <div class="footer-left">

        <h3>Hita<span>Cool</span></h3>

        <p class="footer-links">
            <Link to="/home" className='me-3'> Home  </Link>
            <Link to="/about" className='me-3'> About </Link>
            <Link to="/services" className='me-3'> Services </Link>
            <Link to="/executive" className='me-3'> Executive </Link>

        </p>

        <p class="footer-company-name">future engineering &copy; 2012</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>House 428(1st Floor), Road 30,
Mohakhali DOHS,</span>  Dhaka, Bangladesh</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+88-01971-321446</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">info@hitacool.net</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About the company</span>
            Hitacool Industries Limited is the frist authorized Hitachi AC dealer in Bangladesh.All The products are directly imported from the origin country. We Provide the lowest possible price and maintain the best quality service.
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>
                <div className="copyright mt-3 text-center text-light">
                <small>&copy; 2021 By Arifur Rahman Razon</small>
            </div>

</footer>

        </div>
    );
};

export default Footer;