import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/chat-bot.scss';

// image
// import image from "../assets/img/unnamed.png";

function ChatBot() {
    return (
        <div>
            <div className="chat-bot">
                {/* <div className="container"> */}
                    <div className="row justify-content-center">

                        <div className='col-3'>
                            <div className='side-bar'>
                                <ul>
                                    <li><a href='#'>Upgrade to Plus</a></li>
                                    <li><a href='#'>Dark mode</a></li>
                                    <li><a href='#'>Updates & FAQ</a></li>
                                    <li><a href='#'>Setting</a></li>
                                    <li><a href='#'>Log out</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-7'>
                            <div className='main'>
                                <h3>ChatBot</h3>
                                <p>Inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration? Browse our</p>

                                <form className="mt-5">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            class="form-control"
                                            // placeholder="Email"
                                        />
                                        <a><i class="fa-regular fa-paper-plane"></i></a>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                {/* </div> */}
            </div>

        </div>
    );
}

export default ChatBot;