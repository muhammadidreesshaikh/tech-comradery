import React from 'react';
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
                                    <li><a href="/find-talent">About Tech Comradery</a></li>
                                    <li><a href="/find-work">Tech Comradery Team</a></li>
                                    <li><a href="/enterprise">Terms & Conditions</a></li>
                                    <li><a href="/why-commradery">Contact Us</a></li>
                                    <li><a href="/why-commradery">Blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="first">
                                <h3>Need Help</h3>
                                <ul>
                                    <li><a href="/find-talent">How it Works</a></li>
                                    <li><a href="/find-work">Take a Tour - Employer</a></li>
                                    <li><a href="/enterprise">Take a Tour - Freelancers</a></li>
                                    <li><a href="/why-commradery">Our FAQ </a></li>
                                    <li><a href="/why-commradery">Need Help?</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="first">
                                <h3>Company Info</h3>
                                <ul>
                                    <li><a href="/find-talent">How it Works</a></li>
                                    <li><a href="/find-work">Take a Tour - Employer</a></li>
                                    <li><a href="/enterprise">Take a Tour - Freelancers</a></li>
                                    <li><a href="/why-commradery">Our FAQ</a></li>
                                    <li><a href="/why-commradery">Need Help?</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="first">
                                <h3>STAY CONNECTED</h3>
                                <ul>
                                    <li><a href='#'><i class="fa-solid fa-phone"></i> +1 617-237-0817 </a></li>
                                    <li><a href='#'><i class="fa-solid fa-envelope"></i> Discovery@TechComradery.com </a></li>
                                    <li><a href='#'><i class="fa-solid fa-location-dot"></i> 177 Huntington Ave Ste 1703 PMB 67562 <br />Boston, Massachusetts </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="bottom-bar">
                <div className="container">
                    <div className="row">

                        <div className="col-10">
                            <div className="left">
                                <p>© Copyright 2023, Tech Comradery. All Rights Reserved.</p>
                            </div>
                        </div>

                        <div className="col-2">
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