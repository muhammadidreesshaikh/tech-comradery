// import React from "react";
// import { Link } from 'react-router-dom';
// import "../assets/scss/slider.scss";

// import image from '../assets/img/logo_tech.png';

// function ChatMaster() {

//     const send = () => {
//         console.log('send');
//     }

//     return (
//         <div>
//             <div className="chat-master">
//                 <div className="container">
//                     <div className="row">

//                         <div id="chatbot" className="main-card collapsed">
//                             <button id="chatbot_toggle">
//                                 <ion-icon name="chatbubbles-outline" size="small" id="open"></ion-icon>
//                                 <ion-icon name="close-outline" size="small" className="close" id="close"></ion-icon>
//                             </button>
//                             <div className="main-title">
//                                 <div>
//                                     <img src={image} />
//                                 </div>
//                                 <span>AI Chatbot</span>
//                                 <ion-icon name="refresh-sharp" className="refreshbtn" id="refreshbtn" onClick="clear_chatbot()"></ion-icon>

//                             </div>
//                             <div className="chat-area" id="message-box">
//                             </div>
//                             <div className="line"></div>
//                             <div className="input-div">
//                                 <button onClick="startSr()" className="input-mic" size="large">
//                                     <ion-icon name="mic"></ion-icon>
//                                 </button>
//                                 <input className="input-message" name="message" type="text" id="message" placeholder="Type your message..." />
//                                 <button className="input-send" onClick="send()">
//                                     <ion-icon name="send"></ion-icon>
//                                 </button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default ChatMaster;