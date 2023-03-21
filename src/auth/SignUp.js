import React, { useEffect } from 'react';
//import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import '../assets/scss/sign-up.scss';
import { gapi } from 'gapi-script';

// image
import image from "../assets/img/unnamed.png";
import image1 from "../assets/img/download.png";

function SignUp() {

    const responseFacebook = (response) => {
        console.log(response);
        const { first_name, last_name, short_name, email } = response;
        const message = `First Name: ${first_name}\nLast Name: ${last_name}\nShort Name: ${short_name}\nEmail: ${email}`;
        alert(message);
    }
    const clientId = '1234504266475458-th4erlj9340rlvs1afsm3s3rsms2cclk.apps.googleusercontent.com';

    const responseGoogle = (response) => {
        console.log(response);
        const { name, email } = response.profileObj;
        const message = `Name: ${name}\nEmail: ${email}`;
        alert(message);
    }
    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({ clientId: clientId });
        });
    }, []);

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
                                    <a>
                                        <GoogleLogin
                                            clientId={clientId}
                                            buttonText="SIGN IN WITH GOOGLE"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </a>

                                    <a>
                                        <FacebookLogin
                                            appId="12341681326525637957"
                                            autoLoad={false}
                                            fields="first_name,last_name,short_name,email,picture"
                                            callback={responseFacebook}
                                            render={renderProps => (
                                                <button onClick={renderProps.onClick} className="white w-100 mt-3"><img src={image1} /> Sign in with Facebook</button>
                                            )}
                                            icon={<i className="fab fa-facebook"></i>}
                                            textButton="Sign in with Facebook"
                                        />
                                    </a>
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