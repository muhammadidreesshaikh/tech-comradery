import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/chat-page.scss';

// image
// import image from "../assets/img/unnamed.png";

function ChatBot() {

    const [toggleSideMenu, setToggleSideMenu] = useState(false);

    return (
        <div>
            <div className="chat-bot">

                <div className={"side-bar " + (toggleSideMenu ? 'active' : '')}>
                    <div className='toggle-side-menu'>
                        <a onClick={() => setToggleSideMenu(!toggleSideMenu)}>
                            <i className={toggleSideMenu ? 'fa-solid fa-chevron-left' : 'fa-solid fa-chevron-right'}></i>
                        </a>
                    </div>

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
                        <li>
                            <a href='#'>
                                <i class="fa-regular fa-user"></i>
                                {toggleSideMenu ? 'Upgrade to Plus' : ''}
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-regular fa-moon"></i>
                                {toggleSideMenu ? 'Dark mode' : ''}
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-solid fa-up-right-from-square"></i>
                                {toggleSideMenu ? 'Updates & FAQ' : ''}
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-solid fa-gear"></i>
                                {toggleSideMenu ? 'Setting' : ''}
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                {toggleSideMenu ? ' Log out' : ''}

                            </a>
                        </li>
                    </ul>
                </div>

                <div className='main'>
                    <div className='heading-chatbot'>
                        <h3>Chat Bot</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>

                    <div className='cstm-chat-bar'>
                        <form>
                            <div className="form-group msg-send d-flex">
                                <input type="email" class="form-control" placeholder='Search..' />
                                <a><i class="fa-regular fa-paper-plane"></i></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;