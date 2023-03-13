import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/scss/header.scss';

import logo from '../assets/img/logo.png'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-2">
                            <div className='logo'>
                                {/* <Link to="/find-talent">Tech Comradery</Link> */}
                                <img src={logo}/>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="nav">
                                <ul>
                                    <li><Link to="/find-talent">Find Talent</Link></li>

                                    <div className="dropdown">
                                        <button className="dropbtn">Find Work</button>
                                        <div className="dropdown-content">
                                            <Link to="/">Text 1</Link>
                                            <Link to="/">Text 2</Link>
                                            <Link to="/">Text 3</Link>
                                            <Link to="/">Text 4</Link>
                                        </div>
                                    </div>

                                    <li><Link to="/enterprise">Enterprise</Link></li>
                                    <li><Link to="/why-commradery">Why Commradery</Link></li>
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

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;