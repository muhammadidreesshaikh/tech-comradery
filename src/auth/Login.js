import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/login.scss';

// image
import image from "../assets/img/unnamed.png";
import image1 from "../assets/img/download.png";

function Login() {
    return (
        <div>
            <div className="login">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className='col-12 col-md-9 col-lg-5'>
                            <div className='inner'>
                                <h3>Login</h3>
                                <p>Inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration? Browse our</p>

                                <form className="mt-5">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="form-group pt-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div className="row forgot-checkout mt-3">
                                        <div className="col-6">
                                            <div className="form-group checkout form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                />
                                                <label className="form-check-label">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="forgot-btn">
                                                <Link to="/forget-password">Forgot Password?</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="login-btn mt-4">
                                        <a className="green d-block">Login</a>
                                    </div>

                                    <div className="social-btns row mt-1 g-3">
                                        <div className='col-sm-6'>
                                            <a href='https://support.google.com' className="green d-block w-100"><img src={image} /> Sign in with Google</a>
                                        </div>
                                        <div className='col-sm-6'>
                                            <a href='https://www.facebook.com/login/' className="white d-block w-100"><img src={image1} /> Sign in with Facebook</a>
                                        </div>
                                    </div>
                                </form>

                                <div className="new-account">
                                    <span>Don't have an Account?</span>
                                    <Link to="/beta/sign-up"> Join now. </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;