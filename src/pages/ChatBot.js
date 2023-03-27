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
                            <form className="mt-2">
                                <div className="form-group-custm">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder='New chat'
                                    />
                                    <a><i class="fa-solid fa-plus"></i></a>
                                </div>
                            </form>

                            <ul>
                                <li><a href='#'><i class="fa-regular fa-user"></i> Upgrade to Plus</a></li>
                                <li><a href='#'><i class="fa-regular fa-moon"></i> Dark mode</a></li>
                                <li><a href='#'><i class="fa-solid fa-up-right-from-square"></i> Updates & FAQ</a></li>
                                <li><a href='#'><i class="fa-solid fa-gear"></i> Setting</a></li>
                                <li><a href='#'><i class="fa-solid fa-arrow-right-from-bracket"></i> Log out</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-7'>
                        <div className='main'>
                            <h3>Chat Bot</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                            <form className="mt-5">
                                <div className="form-group position-relative">
                                    <input
                                        type="email"
                                        class="form-control"
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