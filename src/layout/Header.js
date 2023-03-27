import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/scss/header.scss';

import logo from '../assets/img/TC_Logo_black_bg.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div>
            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="col-12">

                        <div className='row'>
                            <div className="col-3">
                                <div className='logo'>
                                    {/* <Link to="/find-talent">Tech Comradery</Link> */}
                                    <a href='/find-talent'><img src={logo} /></a>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-5">
                                <div className="nav">
                                    <ul>
                                        <li><Link to="/find-talent">Find Talent</Link></li>

                                        <div className="dropdown">
                                            <a className="dropbtn">Find Work</a>
                                            <div className="dropdown-content">
                                                <Link to="/">Text 1</Link>
                                                <Link to="/">Text 2</Link>
                                                <Link to="/">Text 3</Link>
                                                <Link to="/">Text 4</Link>
                                            </div>
                                        </div>

                                        <li><Link to="/enterprise">Enterprise</Link></li>
                                        <li><Link to="/why-commradery">Why Comradery</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className='nav-btn-search'>
                                    <input type="text" placeholder="Search.." />
                                    <Link to="/" className="btn-search">Talent</Link>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className='nav-buttons'>
                                    <Link to="/login" className="white">Log In</Link>
                                    <Link to="/sign-up" className="green">Sign Up</Link>
                                </div>
                            </div>

                            {/* responsive-menu */}
                            <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <div className='logo'>
                                        <a href="#"><i class="fas fa-dice-d20"></i></a>
                                    </div>
                                </div>

                                <li><Link to={process.env.PUBLIC_URL + '/find-talent'} onClick={() => setMenuToggle(!menuToggle)}>Find Talent</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + '/find-work'} onClick={() => setMenuToggle(!menuToggle)}>Find Work</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + '/enterprise'} onClick={() => setMenuToggle(!menuToggle)}>Enterprise</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + '/why-commradery'} onClick={() => setMenuToggle(!menuToggle)}>Why Comradery</Link></li>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;