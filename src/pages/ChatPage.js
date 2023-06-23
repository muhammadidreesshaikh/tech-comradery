import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/chat-page.scss';

// image
// import image from "../assets/img/unnamed.png";

function ChatBot() {

    const [toggleSideMenu, setToggleSideMenu] = useState(true);

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
                        {
                            toggleSideMenu ?
                                <div className="form-group-custm">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder='New Chat'
                                    />
                                    <a><i class="fa-solid fa-plus"></i></a>
                                </div>
                                :
                                <a onClick={() => setToggleSideMenu(!toggleSideMenu)} className='side-chat-input'><i class="fa-solid fa-plus"></i></a>
                        }
                    </form>

                    <ul>
                        <li>
                            <a href='#' data-bs-toggle="tooltip" data-placement="right" title="Upgrade to Plus">
                                <i class="fa-regular fa-user"></i>
                                <span className='menu-text'>Upgrade to Plus</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-regular fa-moon"></i>
                                <span className='menu-text'>Dark mode</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-solid fa-up-right-from-square"></i>
                                <span className='menu-text'>Updates & FAQ</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-solid fa-gear"></i>
                                <span className='menu-text'>Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                <span className='menu-text'>Log out</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={"main " + (toggleSideMenu ? '' : 'active')}>
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