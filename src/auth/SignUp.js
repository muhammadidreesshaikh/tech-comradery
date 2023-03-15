import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/sign-up.scss';

// image
import image from "../assets/img/unnamed.png";
import image1 from "../assets/img/download.png";

function SignUp() {
    return (
        <div>
            <div className="sign-up">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className='col-5'>
                            <div className='inner'>
                                <h3>Sign Up</h3>
                                <p>Inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration? Browse our</p>

                                <div className="social-btns mt-5">
                                    <a href='https://support.google.com' className="green w-100 mt-3"><img src={image} /> Sign in with Google</a>
                                    <a href='https://www.facebook.com/login/' className="white w-100 mt-3"><img src={image1} /> Sign in with Facebook</a>
                                </div>

                                <form className="mt-5">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="name"
                                            class="form-control"
                                            placeholder="Name"
                                        />
                                    </div>

                                    <div className="form-group pt-3">
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

                                    <div className="form-group pt-3">
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    {/* <div className="row forgot-checkout">
                                        <div className="col-6">
                                            <div className="form-group checkout form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                />
                                                <label className="form-check-label">
                                                    I've read and agree with Terms of Services and our Privacy Policy.
                                                </label>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="row read-checkout mt-4">
                                        <div className="col-7">
                                            <div className="form-group checkout form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                />
                                                <label className="form-check-label">
                                                    I've read and agree with Terms of Services and our Privacy Policy.
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-5"></div>
                                    </div>

                                    <div className="signup-btn mt-5">
                                        <a className="green d-block">Sign Up</a>
                                    </div>

                                </form>

                                <div className="new-account">
                                    <span>Already have an account?</span>
                                    <Link to="/login"> Login </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;