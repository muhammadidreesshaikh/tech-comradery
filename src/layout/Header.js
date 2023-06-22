import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/scss/header.scss';

import logo from '../assets/img/MicrosoftTeams-image (27).png';
import logo1 from '../assets/img/TC_Logo_black_bg2.png';

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

                        {/* </div><div className='row'>
                            <div className="col-2 col-md-2 col-lg-2">
                                <div className='logo'>
                                    
                                    <a href='http://staging.techcomrad.com/'><img src={logo} /></a>
                                </div>
                            </div>

                            <div className="col-7 col-md-7 col-lg-7">
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
                            </div> */}

                            <div className='top_hdr'>
                            <div className="nav_brand">
                                <div className='logo'>
                                    {/* <Link to="/find-talent">Tech Comradery</Link> */}
                                    <a href='http://techcomrad.com/beta/'><img src={logo} /></a>
                                </div>
                            </div>

                            <div className="nav_menu">
                                <div className="nav m-0">
                                    <ul className='p-0'>
                                        <li><Link to="/beta/find-talent">Find Talent</Link></li>

                                        <li className="dropdown">
                                            <a className="dropbtn">Find Work</a>
                                            <div className="dropdown-content">
                                                <Link to="/beta">Text 1</Link>
                                                <Link to="/beta">Text 2</Link>
                                                <Link to="/beta">Text 3</Link>
                                                <Link to="/beta">Text 4</Link>
                                            </div>
                                        </li>

                                        <li><Link to="/beta/enterprise">Enterprise</Link></li>
                                        <li><Link to="/beta/why-commradery">Why Comradery</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="top_btn_col">
                                <div className='top-right-btn'>
                                    <div className='nav-btn-search'>
                                        <input type="text" placeholder="Search.." />
                                        <Link to="/beta" className="btn-search">Talent</Link>
                                    </div>

                                    <div className='nav-buttons'>
                                        <Link to="/beta/login" className="white">Log In</Link>
                                        <Link to="/beta/sign-up" className="green">Sign Up</Link>
                                    </div>
                                </div>
                            </div>

                            {/* responsive-menu */}
                            <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                                <div className='logo'>
                                    {/* <a href="#"><i class="fas fa-dice-d20"></i></a> */}
                                    <a href='http://techcomrad.com/beta/'><img src={logo1} /></a>
                                </div>

                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + '/beta/find-talent'} onClick={() => setMenuToggle(!menuToggle)}>Find Talent</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/beta/find-work'} onClick={() => setMenuToggle(!menuToggle)}>Find Work</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/beta/enterprise'} onClick={() => setMenuToggle(!menuToggle)}>Enterprise</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/beta/why-commradery'} onClick={() => setMenuToggle(!menuToggle)}>Why Comradery</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;