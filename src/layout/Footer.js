import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/footer.scss';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="first">
                                <h3>Company Info</h3>
                                <ul>
                                    <li><Link to="/beta/find-talent">About Tech Comradery</Link></li>
                                    <li><Link to="/beta/find-work">Tech Comradery Team</Link></li>
                                    <li><Link to="/beta/enterprise">Terms & Conditions</Link></li>
                                    <li><Link to="/beta/why-commradery">Contact Us</Link></li>
                                    <li><Link to="/beta/why-commradery">Blog</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="first">
                                <h3>Need Help</h3>
                                <ul>
                                    <li><Link to="/beta/find-talent">How it Works</Link></li>
                                    <li><Link to="/beta/find-work">Take a Tour - Employer</Link></li>
                                    <li><Link to="/beta/enterprise">Take a Tour - Freelancers</Link></li>
                                    <li><Link to="/beta/why-commradery">Our FAQ </Link></li>
                                    <li><Link to="/beta/why-commradery">Need Help?</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="first">
                                <h3>Company Info</h3>
                                <ul>
                                    <li><Link to="/beta/find-talent">How it Works</Link></li>
                                    <li><Link to="/beta/find-work">Take a Tour - Employer</Link></li>
                                    <li><Link to="/beta/enterprise">Take a Tour - Freelancers</Link></li>
                                    <li><Link to="/beta/why-commradery">Our FAQ</Link></li>
                                    <li><Link to="/beta/why-commradery">Need Help?</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="first">
                                <h3>STAY CONNECTED</h3>
                                <ul>
                                    <li><a to='tel: +1 617-237-0817' target='_blank'><i class="fa-solid fa-phone"></i> +1 617-237-0817 </a></li>
                                    <li><a to='mailto: Discovery@TechComradery.com' target='_blank'><i class="fa-solid fa-envelope"></i> Discovery@TechComradery.com </a></li>
                                    <li><a to='#' target='_blank'><i class="fa-solid fa-location-dot"></i> 177 Huntington Ave Ste 1703 PMB 67562 <br />Boston, Massachusetts </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="bottom-bar">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-7 col-lg-7">
                            <div className="left">
                                <p>© Copyright 2023, Tech Comrad. All Rights Reserved.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 col-lg-5">
                            <div className="right">
                                <a href='#'><i class="fa-brands fa-youtube"></i></a>
                                <a href='https://www.facebook.com/TechComrad/'><i class="fa-brands fa-facebook"></i></a>
                                <a href='#'><i class="fa-brands fa-instagram"></i></a>
                                <a href='https://www.linkedin.com/company/techcomrad/'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='#'><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;