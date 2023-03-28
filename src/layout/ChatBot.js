import React, { useState } from "react";
import axios from "axios";
import '../assets/css/chatbot.css';
import image1 from "../assets/img/logo_tech.png";

const Chatbot = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");



    const toggleChatbot = () => {
        setIsChatbotOpen((prevIsChatbotOpen) => !prevIsChatbotOpen);
        if (!isChatbotOpen) {
            setDefaultMessage();
        }
        if (!isChatbotOpen) {
            setMessages([]);
            setDefaultMessage();
        }
    };

    const setDefaultMessage = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { content: "What problem are you trying to solve with your solution?", sender: "bot" },
        ]);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage(inputValue);
            setInputValue("");
        }
    };

    const sendMessage = async (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { content: message, sender: "user" },
        ]);
        const response = await axios.post(
            "http://31.220.60.30:8000/chatbot/",
            { message }
        );
        const botMessage = response.data.message;
        setMessages((prevMessages) => [
            ...prevMessages,
            { content: botMessage, sender: "bot" },
        ]);
    };

    return (
        <div id="chatbot" className={`main-card ${isChatbotOpen ? "" : "collapsed"}`}>
            <button id="chatbot_toggle" onClick={toggleChatbot}>    
                <ion-icon name="chatbubbles-outline" size="small" id="open"></ion-icon>
                <ion-icon name="close-outline" size="small" className="close" id="close"></ion-icon>
            </button>
            <div className="main-title">
                {/* <img src={image1} alt="Logo" /> */}
                <span>AI Chatbot</span>
                <ion-icon name="refresh-sharp" className="refreshbtn" id="refreshbtn" onClick={() => setMessages([])}></ion-icon>
            </div>
            <div className="chat-area" id="message-box">
                {messages.map((message, i) => (
                    <Message key={i} message={message.content} isSent={message.sender === "user"} />
                ))}
            </div>
            <div className="line"></div>
            <div className="input-div">
                <button onClick={startSr} className="input-mic" size="large">
                    <ion-icon name="mic"></ion-icon>
                </button>
                <input
                    className="input-message"
                    name="message"
                    type="text"
                    id="message"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <button className="input-send" onClick={() => sendMessage(inputValue)}>
                    <ion-icon name="send"></ion-icon>
                </button>
            </div>
        </div>
    );
};

const Message = ({ message, isSent }) => (
    <div className="chat-message-div">
        <span role="text" className={`chat-message ${isSent ? "user-message" : "bot-message"}`}>
            {message}
        </span>
    </div>
);

const startSr = () => {
    console.log("Speech recognition started");
};


export default Chatbot;